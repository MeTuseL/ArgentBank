// readProfile: async (token) => {
//     try{
//       const res = await fetch('localhost:3001/user/profile', {
//         method: 'POST',
//         headers: {Authorization: 'Bearer ' + token}
//       });
//       const result = await res.json();
//       if(result && result.data) {
//         return {success: result.data};
//       } else {
//         return {error: "Une erreur est survenue"};
//       }

//     } catch(err) {
//       return {error:err};
//     }
//   },
