<?php

use app\modules\api\models\Course;
use app\modules\api\models\User;
use app\modules\api\models\UsersCourse;
use yii\db\Migration;

/**
 * Handles the creation of table `users_course`.
 */
class m180123_124625_create_users_course_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createTable(UsersCourse::tableName(), [
            'userId'   => $this->integer()->notNull(),
            'courseId' => $this->integer()->notNull(),
        ]);
        $this->addPrimaryKey('users_course_pk', UsersCourse::tableName(), [
            'userId',
            'courseId',
        ]);

        $usersFk = 'users_course_user_fk';
        $this->addForeignKey($usersFk, UsersCourse::tableName(), 'userId', User::tableName(), 'id', 'CASCADE', 'CASCADE');
        $courseFk = 'users_course_course_fk';
        $this->addForeignKey($courseFk, UsersCourse::tableName(), 'courseId', Course::tableName(), 'id', 'CASCADE', 'CASCADE');
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable(UsersCourse::tableName());
    }
}
