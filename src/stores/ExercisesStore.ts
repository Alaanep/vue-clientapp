import {State} from '@/model/exercise';
import {reactive, toRefs } from 'vue';

const state = reactive<State>({
    exercises: [],
});
  
let initialized=false;
export default function useExercise(){
    const load=()=>{
        if(!initialized){
            state.exercises = [
                { name: 'Harjutus 1', description: 'Kirjeldus 1' },
                { name: 'Harjutus 2', description: 'Kirjeldus 2' },
                { name: 'Harjutus 3', description: 'Kirjeldus 3' },
                { name: 'Harjutus 4', description: 'Kirjeldus 4' },
            ];
            initialized=true;
        }
    };
    return {...toRefs(state), load}
}


