<?php

namespace app\modules\api\controllers;

use app\modules\api\components\CourseComponent;
use app\modules\api\models\Course;
use app\modules\api\models\User;
use Yii;
use yii\rest\Controller;
use yii\web\Response;

/**
 * Default controller for the `api` module
 */
class AuthController extends Controller
{
    /**
     * Метод возвращает компонент для управления курсами.
     *
     * @return CourseComponent
     */
    protected function getCourseComponent()
    {
        return Yii::$app->courseComponent;
    }

//    public function actionRegister($id, $params = []) {
//        return "register";
//    }
//
//    public function actionCreate() {
//        return "create";
//    }

    public function runAction($id, $params = [])
    {
        $request = Yii::$app->request;
        if ($request->isPost) {
            $response         = Yii::$app->response;
            $response->format = Response::FORMAT_JSON;
            $model            = new User();
            $email            = $request->post()['email'];
            $password         = $request->post()['password'];
            $user             = $model::find()->where([
                'email'    => $email,
                'password' => $password,
            ])->one();
            $courses          = $this->getCourseComponent()->getUsersCourses($user['id']);
            $courseList       = [];
            foreach ($courses as $course) {
                array_push($courseList, $course['id']);
            }
            if ($user) {
                $response->data = [
                    'email'     => $user['email'],
                    'firstName' => $user['firstName'],
                    'lastName'  => $user['lastName'],
                    'id'        => $user['id'],
                    'password'  => $user['password'],
                    'courses'   => $courseList,
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
