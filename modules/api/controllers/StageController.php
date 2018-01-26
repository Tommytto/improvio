<?php

namespace app\modules\api\controllers;

use app\modules\api\models\CourseStage;
use app\modules\api\models\Stage;
use Yii;
use yii\base\Model;
use yii\rest\ActiveController;
use yii\rest\Controller;
use yii\web\Response;

/**
 * Default controller for the `api` module
 */
class StageController extends Controller
{
    public $scenario = Model::SCENARIO_DEFAULT;

    public function beforeAction($action)
    {
        $this->enableCsrfValidation = false;
        return parent::beforeAction($action);
    }

    public function actionCreate()
    {
        /* @var $model \yii\db\ActiveRecord */
        $model       = new Stage([
            'scenario' => $this->scenario,
        ]);
        $data        = Yii::$app->getRequest()->getBodyParams();
        $transaction = Yii::$app->db->beginTransaction();
        $model->load($data, '');
        if ($model->save()) {
            $response = Yii::$app->getResponse();
            $response->setStatusCode(201);
        } elseif (! $model->hasErrors()) {
            $transaction->rollBack();
            throw new ServerErrorHttpException('Failed to create the object for unknown reason.');
        }
        $coursesStages           = new CourseStage();
        $coursesStages->courseId = $data['courseId'];
        $coursesStages->stageId  = $model->id;
        if (! $coursesStages->save()) {
            $transaction->rollBack();
            throw new ServerErrorHttpException('Failed to create the object for unknown reason.');
        }
        $transaction->commit();
        Yii::$app->response->format = Response::FORMAT_JSON;
        return $model;
    }
}
