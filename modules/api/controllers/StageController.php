<?php

namespace  app\modules\api\controllers;

use app\modules\api\models\Course;
use app\modules\api\models\Stage;
use app\modules\api\models\User;
use Yii;
use yii\rest\ActiveController;
use yii\web\Controller;
use yii\web\Response;

/**
 * Default controller for the `api` module
 */
class StageController extends Controller
{
    public function actionCreate() {
        $model = new Stage();
        $data = Yii::$app->getRequest()->getBodyParams();
        $model->load($data, '');
        if ($model->save()) {
            $response = Yii::$app->getResponse();
            $response->setStatusCode(201);
            $id = implode(',', array_values($model->getPrimaryKey(true)));
            $response->getHeaders()->set('Location', Url::toRoute([$this->viewAction, 'id' => $id], true));
        } elseif (!$model->hasErrors()) {
            throw new ServerErrorHttpException('Failed to create the object for unknown reason.');
        }
        return $model;
    }
}
