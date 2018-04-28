<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\modules\api\actions;

use app\modules\api\models\UploadForm;
use Yii;
use yii\db\ActiveRecord;
use yii\rest\UpdateAction;
use yii\web\ServerErrorHttpException;
use yii\web\UploadedFile;

/**
 * CreateAction implements the API endpoint for creating a new model from the given data.
 *
 * For more details and usage information on CreateAction, see the [guide article on rest controllers](guide:rest-controllers).
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class PosterCourceAction extends UpdateAction
{
    /**
     * Updates an existing model.
     * @param string $id the primary key of the model.
     * @return \yii\db\ActiveRecordInterface the model being updated
     * @throws ServerErrorHttpException if there is any error when updating the model
     */
    public function run($id)
    {
        $fileModel = new UploadForm();
        $fileModel->fileImage = UploadedFile::getInstanceByName('poster');
        $fileModel->upload();
        /* @var $model ActiveRecord */

        $model = $this->findModel($id);

        if ($this->checkAccess) {
            call_user_func($this->checkAccess, $this->id, $model);
        }
        $data = Yii::$app->getRequest()->getBodyParams();
        $data['poster'] = $fileModel->filePath;
        $model->scenario = $this->scenario;
        $model->load($data, '');
        if ($model->save() === false && !$model->hasErrors()) {
            throw new ServerErrorHttpException('Failed to update the object for unknown reason.');
        }

        return $model;
    }
}
