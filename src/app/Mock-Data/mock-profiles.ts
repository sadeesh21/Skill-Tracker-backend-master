import { Profile } from "./../models/profile";


export const mockprofiles: Profile[] = [
  {
    email: 'dotnet@gmail.com', name: 'Kanna', empId: '2157474', mobile: '9840920729',
    skills: [
      { skillId: 1, name: 'HTML', isTechnical: true, proficiency: 18 },
      { skillId: 2, name: 'ANGULAR 9', isTechnical: true, proficiency: 18 },
      { skillId: 3, name: 'CSS', isTechnical: true, proficiency: 15 },
      { skillId: 4, name: 'DOT CORE', isTechnical: true, proficiency: 15 },
      { skillId: 5, name: 'RESTFUL', isTechnical: true, proficiency: 12 },
      { skillId: 6, name: 'LINQ', isTechnical: true, proficiency: 11 },
      { skillId: 7, name: 'GIT', isTechnical: true, proficiency: 11 },
      { skillId: 8, name: 'DOCKER', isTechnical: true, proficiency: 8 },
      { skillId: 9, name: 'SONARCUBE', isTechnical: true, proficiency: 7 },
      { skillId: 10, name: 'AZURE', isTechnical: true, proficiency: 5 },
      { skillId: 11, name: 'READING', isTechnical: false, proficiency: 18 },
      { skillId: 12, name: 'PLAYING', isTechnical: false, proficiency: 18 },
      { skillId: 13, name: 'MOVIES', isTechnical: false, proficiency: 15 }
    ]
  },
  {
    email: 'sara@gmail.com', name: 'Sara', empId: '999999', mobile: '1234567890',
    skills: [
      { skillId: 1, name: 'HTML', isTechnical: true, proficiency: 18 },
      { skillId: 2, name: 'ANGULAR 9', isTechnical: true, proficiency: 18 },
      { skillId: 3, name: 'CSS', isTechnical: true, proficiency: 15 },
      { skillId: 4, name: 'DOT CORE', isTechnical: true, proficiency: 15 },
      { skillId: 5, name: 'RESTFUL', isTechnical: true, proficiency: 12 },
      { skillId: 6, name: 'LINQ', isTechnical: true, proficiency: 11 },
      { skillId: 7, name: 'GIT', isTechnical: true, proficiency: 11 },
      { skillId: 8, name: 'DOCKER', isTechnical: true, proficiency: 8 },
      { skillId: 9, name: 'SONARCUBE', isTechnical: true, proficiency: 7 },
      { skillId: 10, name: 'AZURE', isTechnical: true, proficiency: 5 },
      { skillId: 11, name: 'READING', isTechnical: false, proficiency: 18 },
      { skillId: 12, name: 'PLAYING', isTechnical: false, proficiency: 18 },
      { skillId: 13, name: 'MOVIES', isTechnical: false, proficiency: 15 }]
  }
];
