<?php
/**
 * @link      http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license   http://www.yiiframework.com/license/
 */

namespace app\modules\api\actions;

use app\modules\api\models\UsersCourse;
use Yii;
use yii\rest\CreateAction;
use yii\base\Model;
use yii\helpers\Url;
use yii\web\ServerErrorHttpException;

/**
 * CreateAction implements the API endpoint for creating a new model from the given data.
 *
 * For more details and usage information on CreateAction, see the [guide article on rest controllers](guide:rest-controllers).
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since  2.0
 */
class CreateCourseAction extends CreateAction
{
    /**
     * Updates an existing model.
     *
     * @param string $id the primary key of the model.
     *
     * @return \yii\db\ActiveRecordInterface the model being updated
     * @throws ServerErrorHttpException if there is any error when updating the model
     */
    public function run()
    {
        if ($this->checkAccess) {
            call_user_func($this->checkAccess, $this->id);
        }

        /* @var $model \yii\db\ActiveRecord */
        $model          = new $this->modelClass([
            'scenario' => $this->scenario,
        ]);
        $data           = Yii::$app->getRequest()->getBodyParams();
        $data['poster'] = 'http://www.pranxer.com/Images/default-image.jpg';
        $transaction    = Yii::$app->db->beginTransaction();
        $model->load($data, '');
        if ($model->save()) {
            $response = Yii::$app->getResponse();
            $response->setStatusCode(201);
            $id = implode(',', array_values($model->getPrimaryKey(true)));
            $response->getHeaders()->set('Location', Url::toRoute([
                $this->viewAction,
                'id' => $id,
            ], true));
        } elseif (! $model->hasErrors()) {
            $transaction->rollBack();
            throw new ServerErrorHttpException('Failed to create the object for unknown reason.');
        }
        $usersCourse           = new UsersCourse();
        $usersCourse->userId   = $data['author'];
        $usersCourse->courseId = $model->id;
        if (! $usersCourse->save()) {
            $transaction->rollBack();
            throw new ServerErrorHttpException('Failed to create the object for unknown reason.');
        }
        $transaction->commit();
        return $model;
    }
}
