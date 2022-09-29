
import {Tudeng} from '@/model/tudeng';
import {defineStore} from 'pinia';
import {ref} from 'vue';

export const tudengiteStore = defineStore('exercisesStore', () => {
    const tudengid = ref<Tudeng[]>([
    ]);  

const lisaTudeng=(tudeng: Tudeng)=>{
    tudengid.value.push(tudeng);
};

return {tudengid, lisaTudeng};
});