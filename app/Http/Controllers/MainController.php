<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DataModel;

class MainController extends Controller
{
    public function store(Request $request)
    {
    	$data=new DataModel();
    	$data->name=$request->name;
    	$data->age=$request->age;
    	$data->profession=$request->profession;
    	$data->save();
    	return $data;
    }

    public function show(Request $request)
    {
    	$data=DataModel::all();

    	return $data;
    } 
    public function delete(Request $request)
    {
        $data=DataModel::find($request->id)->delete();

    }
    public function editItem(request $request,$id)
    {
    //     $data =DataModel::where('id', $id)->first();
    //     $data->name = $request->get('val_1');
    //     $data->age = $request->get('val_2');
    //     $data->profession = $request->get('val_3');
    //     $data->save();
    //     return $data;
           $data=DataModel::where('id',$id)->first();
           $data->name=$request->get('val_1');
           $data->age=$request->get('val_2');
           $data->profession=$request->get('val_3');
           $data->save();
           return $data;

    }
}
