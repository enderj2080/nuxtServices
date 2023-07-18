<template>
    <div class="container text-center text-3xl">
        <h1>Page Home</h1>
    </div>
    <div>
        <pre>
            {{ data }}
        </pre>
    </div>
    
</template>

<script lang="ts" setup>
const {data} = useFetch('/api/users/user')
</script>