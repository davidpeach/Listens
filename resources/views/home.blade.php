@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <router-link :to="{ name: 'artist' }">Artists</router-link> --
        <router-link :to="{ name: 'album' }">Albums</router-link> --
        <router-link :to="{ name: 'listen' }">Listens</router-link>
        <div class="col-md-12">
            <router-view></router-view>
        </div>
    </div>
</div>
@endsection
