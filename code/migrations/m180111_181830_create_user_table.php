<?php

use app\modules\api\models\User;
use yii\db\Migration;

/**
 * Handles the creation of table `user`.
 */
class m180111_181830_create_user_table extends Migration
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
        $this->createTable(User::tableName(), [
            'id'        => $this->primaryKey(),
            'firstName' => $this->string()->notNull(),
            'lastName'  => $this->string()->notNull(),
            'password'  => $this->string()->notNull(),
            'email'     => $this->string()->notNull()->unique(),
        ], $tableOptions);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable(User::tableName());
    }
}
