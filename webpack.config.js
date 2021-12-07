/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License version 3.0
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License version 3.0
 */

const path = require('path');
const webpack = require('webpack');
const keepLicense = require('uglify-save-license');

const psRootDir = path.resolve(process.env.PWD, '../../');
const psJsDir = path.resolve(psRootDir, 'admin680rbiv5e/themes/new-theme/js');

console.log(__dirname);

const config = {
	entry: {
		'shipping-form': [
			'./views/js/admin/variable-shipping-carrier'
		]
	},
	output: {
		path: path.resolve(__dirname, './views/js'),
		filename: '[name].bundle.js'
	},
	//devtool: 'source-map', // uncomment me to build source maps (really slow)
	resolve: {
		extensions: ['.js'],
		modules: [path.resolve(__dirname, './node_modules'), 'node_modules'],
		alias: {
			'@js': psJsDir,
			'@app': path.resolve(psJsDir, 'app'),
			'@components': path.resolve(psJsDir, 'components'),
			'@pages': path.resolve(psJsDir, 'pages')
		}
	}
};

module.exports = config;
