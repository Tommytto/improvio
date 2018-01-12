<?php

use yii\db\Migration;

/**
 * Class m180111_222138_create_talbe_courses
 */
class m180111_222138_create_talbe_courses extends Migration
{
    /**
     * @inheritdoc
     */
    public function up() //Событые создания таблицы
    {
        $tableOptions = null;

        if ($this->db->driverName === 'mysql') { // Тип БД, далее тип таблицы и стандартная кодировка для этой таблицы.
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }
        $this->createTable('courses', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'poster' => $this->string(),
            'level' => $this->string(),
            'time' => $this->float(),
            'lectureCount' => $this->smallInteger()->notNull(),
            'price' => $this->smallInteger(),
            'isPublic' => $this->boolean()->defaultValue(true),
            'datePublish' => $this->date(),
            'author' => $this->smallInteger()->notNull(),
            'description' => $this->string(),
        ], $tableOptions);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('courses');
    }
}
