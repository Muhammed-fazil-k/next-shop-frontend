import {useQuery} from 'react-query';
import { fetchJson } from '../lib/api';
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";

export function useSignIn(){
  const queryClient = useQueryClient();

  const mutation = useMutation(async ({email,password}) => {
    return await fetchJson("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  });
  return {
    signIn:async (email,password)=>{
      try{
        const user = await mutation.mutateAsync({email,password});
        queryClient.setQueryData("user", user);
        return true;
      } catch(err){
        return false;
      }
      
    } ,
    signInError:mutation.isError,
    signInLoading:mutation.isLoading,
  }
}

export function useUser(){
    const query = useQuery('user',async ()=>{
        try {
          return await fetchJson("/api/user");
        } catch (err) {
          return undefined;
        }
      },{
        cacheTime:Infinity,
        staleTime:30000,//useQuery will use cached value for this much time without making a API request
      });
      return query.data;
}