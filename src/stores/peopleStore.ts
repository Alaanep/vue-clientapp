import {Person} from '@/modules/person';
import {defineStore} from 'pinia';
import {ref} from 'vue';
import useApi from '@/modules/api';

export const UsePeopleStore = defineStore('peopleStore', () => {
    const apiGetPeople = useApi<Person[]>('people');
    const people = ref<Person[]>([]);
    const loadPeople = async()=>{
        await apiGetPeople.request();
        if(apiGetPeople.response.value){
            return apiGetPeople.response.value!;
        }
        return [];
    };
    const load =  async()=>{
        people.value= await loadPeople();
        console.log(people.value);
    }

const addPerson= async (person: Person)=>{
    const apiAddPeople = useApi<Person>('people', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
        body: JSON.stringify(person),
    });
    await apiAddPeople.request();
    if (apiAddPeople.response.value) {
      people.value.push(apiAddPeople.response.value!);
    }
};

return {people,load, addPerson};
});