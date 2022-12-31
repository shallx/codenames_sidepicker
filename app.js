const {
    createApp,
    toRefs,
    reactive,
    computed,
    onMounted
} = Vue;

const app = {
    setup(){
        const store = reactive({
            blues: [],
            reds: [],
            names: "",
            namesArray: [],
            sides: [],
        })

        const assignSides = () => {
            store.blues = []
            store.reds = []
            store.names = store.names.trim()
            if(store.names == "") {
                store.namesArray = []
                return;
            }
            store.namesArray = store.names.split(',').map(name => name.trim());
            while(store.namesArray.length > 0){
                const index = Math.floor(Math.random() * store.namesArray.length);
                store.blues.push(store.namesArray[index])
                store.namesArray.splice(index, 1);
                if(store.namesArray.length > 0){
                    const index = Math.floor(Math.random() * store.namesArray.length);
                    store.reds.push(store.namesArray[index])
                    store.namesArray.splice(index, 1);
                }
            }
        }

        return {
            ...toRefs(store),
            assignSides,

        }
    }

}
createApp(app).mount('#app');