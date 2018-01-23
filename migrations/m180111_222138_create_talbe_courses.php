<?php

use app\modules\api\models\Course;
use yii\db\Migration;

/**
 * Class m180111_222138_create_talbe_courses
 */
class m180111_222138_create_talbe_courses extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp() //Событые создания таблицы
    {
        $tableOptions = null;

        if ($this->db->driverName === 'mysql') { // Тип БД, далее тип таблицы и стандартная кодировка для этой таблицы.
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }
        $this->createTable(Course::tableName(), [
            'id'           => $this->primaryKey(),
            'name'         => $this->string(),
            'poster'       => $this->string(),
            'level'        => $this->string(),
            'time'         => $this->float(),
            'lectureCount' => $this->smallInteger(),
            'price'        => $this->smallInteger(),
            'isPublic'     => $this->boolean()->defaultValue(true),
            'datePublish'  => $this->date(),
            'author'       => $this->smallInteger(),
            'description'  => $this->string(),
        ], $tableOptions);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable(Course::tableName());
    }
}
