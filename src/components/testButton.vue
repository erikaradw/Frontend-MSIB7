<template>
    <button @click="deleteUser">
        <slot>Delete</slot>
    </button>
</template>

<script>
    export default{
        props: ['id', 'name'],
        methods: {
            deleteUser() {
                alert(`I am ${this.name}!`)
            }
        },
    }
</script>