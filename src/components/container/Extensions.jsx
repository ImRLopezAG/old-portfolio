import { DevProfile, Skills } from './base'

export const Extensions = () => {
  const skills = [
    {
      name: '.Net',
      src: './assets/extensions/.net.svg',
      desc: '.net is a framework for building any type of app that runs on Windows. It includes a large class library called Framework Class Library (FCL) and provides language interoperability across several programming languages. ',
    },
    {
      name: 'Asp.Net',
      src: './assets/extensions/asp.net.svg',
      desc: 'ASP.NET is a web application framework developed and marketed by Microsoft to allow programmers to build dynamic web sites, web applications and web services. ',
    },
    {
      name: 'Bootstrap',
      src: './assets/extensions/bootstrap.svg',
      desc: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
    },
    {
      name: 'C #',
      src: './assets/extensions/c-sharp.svg',
      desc: 'C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.',
    },
    {
      name: 'CSS',
      src: './assets/extensions/css3.svg',
      desc: 'CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
    },
    {
      name: 'Git',
      src: './assets/extensions/git.svg',
      desc: 'Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.',
    },
    {
      name: 'HTML',
      src: './assets/extensions/html5.svg',
      desc: 'HTML is the standard markup language for creating Web pages. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
    },
    {
      name: 'JavaScript',
      src: './assets/extensions/javascript.svg',
      desc: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.',
    },
    {
      name: 'MongoDB',
      src: './assets/extensions/mongoDb.svg',
      desc: 'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
    },
    {
      name: 'Next.js',
      src: './assets/extensions/next-js.svg',
      desc: 'Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.',
    },
    {
      name: 'Node Js',
      src: './assets/extensions/node.svg',
      desc: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
    },
    {
      name: 'React',
      src: './assets/extensions/react.svg',
      desc: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.',
    },
    {
      name: 'Sequelize',
      src: './assets/extensions/sequelize.svg',
      desc: 'Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, read replication and more.',
    },
    {
      name: 'SQL',
      src: './assets/extensions/sql.svg',
      desc: 'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS).',
    },
    {
      name: 'Tailwind',
      src: './assets/extensions/tailwind.svg',
      desc: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.',
    },
    {
      name: 'TypeScript',
      src: './assets/extensions/typescript.svg',
      desc: 'TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.',
    },
  ]
  return (
    <div className="extensions ">
      <div className="extensions-left ">
        {skills.map((skill, index) => {
          const { name, src, desc } = skill
          return <Skills key={name + index} name={name} src={src} desc={desc} />
        })}
      </div>
      <div className="extensions-right max-[680px]:d-none">
        <DevProfile />
      </div>
    </div>
  )
}
