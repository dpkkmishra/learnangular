<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends MY_Controller{

	public function __construct()
	{
		 parent::__construct();
	}

	public function index_get(){		
		$this->response(array('message' => 'Hello World!'));
	}
}
?>