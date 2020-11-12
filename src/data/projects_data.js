import contact_keeper from '../assets/projects_images/contact_keeper.png';
import github_finder from '../assets/projects_images/github_finder.png';
import it_logger from '../assets/projects_images/it_logger.png';
import todo_list from '../assets/projects_images/todo_list.png';
import form_validation from '../assets/projects_images/form_validation.png';
import storefront from '../assets/projects_images/storefront.jpg';
import shopping_list from '../assets/projects_images/shopping_list.png';

const projects_data = [
  {
    name: 'Contact Keeper',
    image: contact_keeper,
    deployed_url: 'https://vast-coast-89308.herokuapp.com/',
    github_url: 'https://github.com/evuong/contacts-keeper',
    category: ['React', 'MERN']
  },

  {
    name: 'GitHub Finder',
    image: github_finder,
    deployed_url: 'https://githubfinder82937.netlify.app/',
    github_url: 'https://github.com/evuong/github-finder',
    category: ['React']
  },

  {
    name: 'IT Logger',
    image: it_logger,
    deployed_url: 'https://github.com/evuong/it-logger',
    github_url: 'https://github.com/evuong/it-logger',
    category: ['React']
  },

  {
    name: 'To Do List',
    image: todo_list,
    deployed_url: 'https://github.com/evuong/todo-list',
    github_url: 'https://github.com/evuong/todo-list',
    category: ['React']
  },

  {
    name: 'Form Validation',
    image: form_validation,
    deployed_url: 'https://github.com/evuong/WEB222/tree/master/Assignment%206',
    github_url: 'https://github.com/evuong/WEB222/tree/master/Assignment%206',
    category: ['Vanilla']
  },

  {
    name: 'Car Storefront',
    image: storefront,
    deployed_url: 'https://github.com/evuong/WEB222/tree/master/Assignment%205/partB',
    github_url: 'https://github.com/evuong/WEB222/tree/master/Assignment%205/partB',
    category: ['Vanilla']
  },
  {
    name: 'Shopping List',
    image: shopping_list,
    deployed_url: 'https://expo.io/@evuong/projects/ShoppingList',
    github_url: 'https://github.com/evuong/shopping-list',
    category: ['React Native']
  }
];

const project_types = ['React', 'MERN', 'Vanilla', 'React Native'];

export { projects_data, project_types };
