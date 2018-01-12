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
class AppAsset extends AssetBundle
{
    public $sourcePath = '@app/build';
    public $css = ['main.min.css'];
    public $js = [
        'vendor.bundle.min.js',
        'module-name.min.js',
        'main.min.js',
    ];
    public $depends = [
//        'app\assets\IconicAsset',
    ];
}
