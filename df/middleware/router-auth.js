// import Vue from 'vue';
// const userLogged =Vue.$auth.user;
// export default function ({ store, route, redirect }) {
//       const user_permission=[
//         {user_type: 'company', user_part_of:'admin',permission:[1001,1002,1003,1004,1005,1015,6,7,8,9,2,1,2001,2002,2003,2000]},
//         {user_type: 'user', user_part_of:'manager',permission:[6,1001,'/management/agents','/management/managers','/management/landlords','/management/tenant','/approvals/list',9]},
//         {user_type: 'user', user_part_of:'landlord',permission:['/properties','/approvals/list','/reports/list',2001,2002,2003,2000]},
//         {user_type: 'user', user_part_of:'user',permission:[6,1001,'/management/landlords','/approvals/list','/reports/list']},
//       ];
//       const user_logged_permission = user_permission.filter(x => 
//         x.user_type == userLogged.user_type && x.user_part_of == userLogged.user_part_of).map(x => x);
//       const userPermission= user_logged_permission[0].permission;
//       const publicPages = ['/account/login', '/account/register', '/account/forgot-password'];
//       const authpage = !publicPages.includes(route.path);
//       const authpageRoute = !userPermission.includes(route.path);
      
//       if( userLogged.user_type !== 'admin'){
//         if (authpageRoute) {
//           return redirect('/account/login');
//         }
//       }
//       // const loggeduser = localStorage.getItem('user');
  
//       // if (authpage && !loggeduser) {
//       //   return redirect('/account/login');
//       // }
  
//       // redirect();
    
// }
  