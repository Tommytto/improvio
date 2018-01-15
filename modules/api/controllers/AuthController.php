<?php

namespace  app\modules\api\controllers;

use app\modules\api\models\Course;
use app\modules\api\models\User;
use Yii;
use yii\rest\ActiveController;
use yii\web\Controller;
use yii\web\Response;

/**
 * Default controller for the `api` module
 */
class AuthController extends Controller
{
    public function runAction($id, $params = [])
    {

        $request = Yii::$app->request;
        if ($request->isPost) {
            $response = Yii::$app->response;
            $response->format = Response::FORMAT_JSON;
            $model = new User();
            $courseModel = new Course();
            $email = $request->post()['email'];
            $password = $request->post()['password'];
            $user = $model::find()->where(['email' => $email, 'password' => $password])->one();
            $courses = $courseModel::find()->where(['author' => $user['id']])->all();
            $courseList = [];
            foreach($courses as $course)
            {
                array_push($courseList, $course['id']);
            }
            if ($user) {
                $response->data = [
                    'email' => $user['email'],
                    'firstName' => $user['firstName'],
                    'lastName' => $user['lastName'],
                    'id' => $user['id'],
                    'password' => $user['password'],
                    'courses' => $courseList,
                ];
            } else {
                $response->data = ['error' => 'Неправильный email или пароль'];
            }
            $response->send();
        } else {
            return $this->renderContent(null);
        }

    }
}
