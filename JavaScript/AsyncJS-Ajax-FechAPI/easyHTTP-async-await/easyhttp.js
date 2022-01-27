class EasyHTTP {

    async get(url){

        const res = await fetch(url);
        const data = await res.json();
        return data;
        // return new Promise((resolve,reject)=>{
        //     fetch(url)
        //     .then(res => res.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err));
        // })
        
    }

    async post(data,url){

        const res = await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });

        const user = await res.json();

        return user;
        // return new Promise((resolve,reject)=>{
            // fetch(url,{
            //     method:'POST',
            //     headers:{
            //         'Content-type':'application/json'
            //     },
            //     body: JSON.stringify(data)
            // })
        //     .then(res => res.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err));
        // })
    }

    async put(data,url){

        const res = await fetch(url,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });

        const user = await res.json();

        return user;
        // return new Promise((resolve,reject)=>{
        //     fetch(url,{
        //         method:'PUT',
        //         headers:{
        //             'Content-type':'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     })
        //     .then(res => res.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err));
        // })
    }

    async delete(url){

        const res = await fetch(url,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            },
        });

        const user = await 'deleted user';

        return user;
        

    }
}