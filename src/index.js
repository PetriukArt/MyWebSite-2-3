import './index.html';
import './job.html';
import './contact.html';
import './university.html';
import './about.html';
import './index.scss';


var Menu = require('./modules/menu');

const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");

Menu(toggler, navLinks, navItems);