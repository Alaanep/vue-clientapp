<template>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <form class="max-w-md w-full space-y-8">
            <div class="mt-8 space-y-6">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="Id">Id</label>
                        <input
                            id="Id"
                            type="text"
                            name="Id"
                            v-model="person.Id"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Id"
                        />
                    </div>
                    <div>
                        <label for="Name">Name</label>
                        <input
                            id="Name"
                            type="text"
                            name="Name"
                            v-model="person.Name"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <label for="Gender">Gender</label>
                        <select
                            id="Gender"
                            name="Gender"
                            v-model="person.Gender"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Gender"
                        >
                        <option selected value="Female">Female</option>
                        <option value="Male">Male</option>
                        </select>
                    </div>
                    <div>
                        <label for="DateOfBirth">DateOfBirth</label>
                        <input
                            type="Date"
                            id="DateOfBirth"
                            name="DateOfBirth"
                            v-model="person.DateOfBirth"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="DateOfBirth"
                        />
                    </div>
                    <div>
                        <label for="HairColor">HairColor</label>
                        <select
                            id="HairColor"
                            name="HairColor"
                            v-model="person.HairColor"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="HairColor"
                        >
                        <option selected value="Brunette">Brunette</option>
                        <option value="Blonde">Blonde</option>
                        <option value="Ginger">Ginger</option>
                        <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label for="Height">Height</label>
                        <input
                            id="Height"
                            type="text"
                            name="Height"
                            v-model="person.Height"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Height"
                        /> 
                    </div>
                    <div>
                        <label for="Weight">Weight</label>
                        <input
                            id="Weight"
                            type="text"
                            name="Weight"
                            v-model="person.Weight"
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Weight"
                        /> 
                    </div>
                   
                </div>
                <div>
                    <button
                        @click.prevent="submitForm" 
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">            
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                        Add Person
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { Person } from '@/modules/person';
    //import useExercise from '@/stores/ExercisesStore';
    //import { onMounted, ref, Ref } from 'vue';
    import { UsePeopleStore } from '@/stores/peopleStore';
    import { createStructuralDirectiveTransform } from '@vue/compiler-core';
    
    import { ref, Ref } from 'vue';

    import { useRouter } from 'vue-router';
    
    const person: Ref<Person>=ref({
        Id: 0, 
        Name: '', 
        Gender: '', 
        DateOfBirth: "", 
        HairColor: '', 
        Height: 0, 
        Weight: 0
    });

    const {addPerson}=UsePeopleStore();
    const router=useRouter();

   

    const submitForm=()=>{
        
        //addPerson({...person.value});
        var date= new Date(person.value.DateOfBirth).toJSON();
        addPerson({
            Id: person.value.Id,
            Name: person.value.Name,
            Gender: person.value.Gender,
            DateOfBirth: date,
            HairColor: person.value.HairColor,
            Height: person.value.Height,
            Weight: person.value.Weight
        })
        
        person.value.Id=0;
        person.value.Name='';
        person.value.Height=0;
        person.value.Weight=0;
        router.push({name: 'People'});
    };
</script>