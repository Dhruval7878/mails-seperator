'use server'

export async function login(formData){
    const action = formData.get('action');
    console.log(action);
}

export async function logout(){
    console.log('logout');
}