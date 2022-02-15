<template>
  <div></div>
</template>

<script>
export default {
    name: 'CreateDevice',
    data () {
        return {
            token: ''
        }
    },
    created () {
        console.log('createDevice')
        this.createDevices()
    },
    methods: {
        createDevices () {
            console.log('createDevice222')
            this.axios.post('http://3year.zhzinfo.cn:8080/api/auth/login',
                {
                    'username': 'zifer66@hotmail.com',
                    'password': '123456a?'
                },
                {'Content-Type': 'application/json'}
            )
            .then(response => {
                console.log('token' + response.data.token)
                this.axios.get('http://3year.zhzinfo.cn:8080/api/device/ad7ceb00-1b63-11ec-8669-338c6237e914',
                    {
                        headers: {'X-Authorization': 'Bearer ' + response.data.token}
                    }
                )
                .then(res => {
                    console.log(res)
                })
            })
        }
    }
}
</script>

<style>

</style>
