<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class IconicAsset extends AssetBundle
{
    public $sourcePath = '@app/node_modules/open-iconic/font/css';
    public $css = ['open-iconic-bootstrap.css'];
    public $js = [];
    public $depends = [];
}
