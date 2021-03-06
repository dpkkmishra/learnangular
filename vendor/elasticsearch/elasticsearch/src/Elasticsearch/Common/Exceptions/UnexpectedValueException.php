<?php

namespace Elasticsearch\Common\Exceptions;

/**
 * UnexpectedValueException
 *
 * Denote a value that is outside the normally accepted values
 *
 * @category Elasticsearch
 * @package  Elasticsearch\Common\Exceptions
 * @author   Zachary Tong <zachary.tong@elasticsearch.com>
 * @license  //www.apache.org/licenses/LICENSE-2.0 Apache2
 * @link     //elasticsearch.org
 */
class UnexpectedValueException extends \UnexpectedValueException implements ElasticsearchException
{
}
