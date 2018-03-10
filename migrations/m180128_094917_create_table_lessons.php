<?php

use yii\db\Migration;

/**
 * Class m180128_094917_create_table_lessons
 */
class m180128_094917_create_table_lessons extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
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

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180128_094917_create_table_lessons cannot be reverted.\n";

        return false;
    }
    */
}
