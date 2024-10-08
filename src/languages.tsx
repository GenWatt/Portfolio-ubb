export type TranslationKeys = 'contact' | 'profile' | 'greenPurple' | 'createdBy'
    | 'profileDescription' | 'myAccounts' | 'bluePink' | 'lightTheme' | 'author' | 'seeOnGithub' | 'createdAt' | 'lastCommit'
    | 'seeRepositoryOnGithub' | 'seeUserOnGithub' | 'langCode' | 'langName' | 'projects' | 'myProjects'
    | 'repositoryLinkCopiedToClipboard' | 'langDirection' | 'softwareDdeveloper' | 'openDrawer' | 'closeDrawer' | 'technicalSchool'
    | 'university' | 'downloadResume' | 'seeInNewTabResume' | 'techStack' | 'resume' | 'langISO' | 'education' | 'resumeLoadingError'
    | 'showModelIn3D' | 'universitySpecialization' | 'universityStart' | 'universityEnd' | 'mechatronics' | 'technicalSchoolStart'
    | 'technicalSchoolEnd' | 'loadingIsTakingTooLong' | 'now' | 'technicalSchoolDescription' | 'universityDescription' | 'inProgress';

export type OptionalTranslationKeys = 'authorName';

export type RequiredTranslationKeys = Exclude<TranslationKeys, OptionalTranslationKeys>;

export type LanguageDictionary = {
    [key in RequiredTranslationKeys]: string;
} & {
        [key in OptionalTranslationKeys]?: string;
    };


export type DictionaryType = {
    [key: string]: LanguageDictionary;
};

export const dictionary: DictionaryType = {
    pl: {
        langCode: 'pl',
        langName: 'Polski',
        langDirection: 'ltr',
        contact: 'Kontakt',
        profile: 'Profil',
        projects: 'Projekty',
        greenPurple: 'Zielono-fioletowy',
        bluePink: 'Niebiesko-różowy',
        myProjects: 'Moje projekty',
        lightTheme: 'Jasny motyw',
        createdBy: 'Stworzone przez',
        profileDescription: 'Student 7. roku studiów stacjonarnych na kierunku Inżynieria Oprogramowania na Uniwersytecie Bielsko-Biała. Posiadam doświadczenie w tworzeniu aplikacji webowych (JavaScript, React, Node.js, Vue.js) oraz desktopowych (C#, WPF, Unity). Pracowałem z różnymi bazami danych (MySQL, SQL Server, MongoDB) oraz narzędziami DevOps (Docker, Azure DevOps). Szukam elastycznej pracy na pół etatu (pełny etat możliwy od września), by zdobywać doświadczenie zawodowe i rozwijać swoje umiejętności.',
        myAccounts: 'Moje konta',
        author: 'Adriana Raszka',
        seeOnGithub: 'Zobacz na Githubie',
        createdAt: 'Utworzono',
        lastCommit: 'Ostatni commit',
        seeRepositoryOnGithub: 'Zobacz repozytorium na Githubie',
        seeUserOnGithub: 'Zobacz użytkownika na Githubie',
        repositoryLinkCopiedToClipboard: 'Link do repozytorium został skopiowany do schowka',
        softwareDdeveloper: 'Programista oprogramowania',
        openDrawer: 'Otwórz szufladę',
        closeDrawer: 'Zamknij szufladę',
        technicalSchool: 'Technikum Mechatroniczne',
        university: 'Uniwersytet Bielsko-Biała',
        downloadResume: 'Pobierz CV',
        seeInNewTabResume: 'Zobacz CV w nowej karcie',
        techStack: 'Technologie',
        resume: 'CV',
        langISO: 'pl-PL',
        education: 'Edukacja',
        resumeLoadingError: 'Wystąpił błąd podczas ładowania CV',
        showModelIn3D: 'Pokaż model w 3D',
        universitySpecialization: 'Specjalizacja',
        universityStart: 'Rozpoczęcie',
        universityEnd: 'Zakończenie',
        mechatronics: 'Mechatronika',
        technicalSchoolStart: 'Początek technikum',
        technicalSchoolEnd: 'Koniec technikum',
        loadingIsTakingTooLong: 'Ładowanie trwa powyżej',
        now: 'teraz',
        technicalSchoolDescription: "Jako absolwent technikum o specjalizacji Mechatronika zdobyłem wszechstronną wiedzę i praktyczne umiejętności z zakresu elektroniki, elektryki oraz programowania sterowników PLC. Program nauczania zapewnił solidne podstawy w tych obszarach, kładąc nacisk na szkolenie praktyczne i zastosowania w rzeczywistości. Edukacja ta wyposażyła mnie w umiejętność rozumienia i rozwiązywania złożonych problemów technicznych, projektowania i programowania sterowników PLC oraz efektywnego działania w dziedzinie mechatroniki.",
        universityDescription: "W trakcie studiów na Uniwersytecie zdobyłem obszerną wiedzę i praktyczne doświadczenie w różnych językach programowania i technologiach. Opanowałem C++ i C#, a także zapoznałem się z technologiami .Net, takimi jak ASP.NET i WPF. Ponadto zgłębiłem programowanie PLC, co dodatkowo poszerzyło moje umiejętności techniczne. Ponadto nauczyłem się tworzyć strony internetowe za pomocą React oraz zarządzać bazami danych SQL. To wszechstronne wykształcenie wyposażyło mnie w różnorodny zestaw umiejętności, umożliwiając mi radzenie sobie z złożonymi wyzwaniami związanymi z rozwojem oprogramowania oraz efektywne działanie w dziedzinie informatyki.",
        inProgress: 'W trakcie rozwoju'
    },
    us: {
        langCode: 'us',
        langName: 'English',
        langDirection: 'ltr',
        contact: 'Contact',
        profile: 'Profile',
        projects: 'Projects',
        greenPurple: 'Green-purple',
        bluePink: 'Blue-pink',
        myProjects: 'My projects',
        lightTheme: 'Light theme',
        createdBy: 'Created by',
        profileDescription: '7th-year full-time student of Software Engineering at Bielsko-Biała University. I have experience in developing web applications (JavaScript, React, Node.js, Vue.js) and desktop applications (C#, WPF, Unity). I have worked with various databases (MySQL, SQL Server, MongoDB) and DevOps tools (Docker, Azure DevOps). I am looking for a flexible part-time job (full-time available from September) to gain professional experience and develop my skills.',
        myAccounts: 'My accounts',
        author: 'Adrian Raszka',
        seeOnGithub: 'See on Github',
        createdAt: 'Created at',
        lastCommit: 'Last commit',
        seeRepositoryOnGithub: 'See repository on Github',
        seeUserOnGithub: 'See user on Github',
        repositoryLinkCopiedToClipboard: 'Repository link copied to clipboard',
        softwareDdeveloper: 'Software developer',
        openDrawer: 'Open drawer',
        closeDrawer: 'Close drawer',
        technicalSchool: 'Technical Mechatronics School',
        university: 'University of Bielsko-Biała',
        downloadResume: 'Download CV',
        seeInNewTabResume: 'See CV in new tab',
        techStack: 'Technologies',
        resume: 'Resume',
        langISO: 'en-US',
        education: 'Education',
        resumeLoadingError: 'An error occurred while loading the resume',
        showModelIn3D: 'Show model in 3D',
        universitySpecialization: 'Specialization',
        universityEnd: 'End',
        universityStart: 'Start',
        mechatronics: 'Mechatronics',
        technicalSchoolStart: 'Technical school start',
        technicalSchoolEnd: 'Technical school end',
        loadingIsTakingTooLong: 'Loading is taking above',
        authorName: 'Adrian Raszka',
        now: 'now',
        technicalSchoolDescription: "As a graduate of a technical school specializing in Mechatronics, I have gained comprehensive knowledge and practical skills in electronics, electricity, and Programmable Logic Controller (PLC) programming. The curriculum provided a strong foundation in these areas, emphasizing hands-on training and real-world applications. This education has equipped me with the ability to understand and solve complex technical problems, design and program PLC controllers, and contribute effectively in the field of Mechatronics.",
        universityDescription: "During my studies at the University, I gained extensive knowledge and practical experience in various programming languages and technologies. I mastered C++ and C#, and got acquainted with .Net technologies such as ASP.NET and WPF. I also delved into PLC programming, which further broadened my technical skills. In addition, I learned how to create web pages using React and manage SQL databases. This comprehensive education has equipped me with a diverse set of skills, enabling me to tackle complex software development challenges and contribute effectively in the field of computer science.",
        inProgress: 'In progress'
    },
    sp: {
        langCode: 'sp',
        langName: 'Español',
        langDirection: 'ltr',
        contact: 'Contacto',
        profile: 'Perfil',
        projects: 'Proyectos',
        greenPurple: 'Verde-púrpura',
        bluePink: 'Azul-rosa',
        myProjects: 'Mis proyectos',
        lightTheme: 'Tema claro',
        createdBy: 'Creado por',
        profileDescription: 'Estudiante de 7º año a tiempo completo del programa de Ingeniería de Software en la Universidad de Bielsko-Biała. Tengo experiencia en el desarrollo de aplicaciones web (JavaScript, React, Node.js, Vue.js) y aplicaciones de escritorio (C#, WPF, Unity). He trabajado con varias bases de datos (MySQL, SQL Server, MongoDB) y herramientas de DevOps (Docker, Azure DevOps). Busco un trabajo de medio tiempo flexible (a tiempo completo disponible a partir de septiembre) para adquirir experiencia profesional y desarrollar mis habilidades.',
        myAccounts: 'Mis cuentas',
        author: 'Adrian Raszka',
        seeOnGithub: 'Ver en Github',
        createdAt: 'Creado en',
        lastCommit: 'Último commit',
        seeRepositoryOnGithub: 'Ver repositorio en Github',
        seeUserOnGithub: 'Ver usuario en Github',
        repositoryLinkCopiedToClipboard: 'Enlace del repositorio copiado al portapapeles',
        softwareDdeveloper: 'Desarrollador de software',
        closeDrawer: 'Cerrar cajón',
        openDrawer: 'Abrir cajón',
        technicalSchool: 'Escuela Técnica de Mecatrónica',
        university: 'Universidad de Bielsko-Biała',
        downloadResume: 'Descargar CV',
        seeInNewTabResume: 'Ver CV en nueva pestaña',
        techStack: 'Tecnologías',
        resume: 'CV',
        langISO: 'es-ES',
        education: 'Educación',
        resumeLoadingError: 'Se produjo un error al cargar el CV',
        showModelIn3D: 'Mostrar modelo en 3D',
        universitySpecialization: 'Especialización',
        universityStart: 'Inicio',
        universityEnd: 'Fin',
        mechatronics: 'Mecatrónica',
        technicalSchoolStart: 'Inicio de la escuela técnica',
        technicalSchoolEnd: 'Fin de la escuela técnica',
        loadingIsTakingTooLong: 'La carga está tomando más de',
        now: 'ahora',
        technicalSchoolDescription: "Como graduado de una escuela técnica especializada en Mecatrónica, he adquirido conocimientos y habilidades prácticas en electrónica, electricidad y programación de controladores lógicos programables (PLC). El plan de estudios proporcionó una sólida base en estas áreas, enfatizando la capacitación práctica y las aplicaciones del mundo real. Esta educación me ha dotado de la capacidad de comprender y resolver problemas técnicos complejos, diseñar y programar controladores PLC y contribuir eficazmente en el campo de la Mecatrónica.",
        universityDescription: "Durante mis estudios en la Universidad, adquirí amplios conocimientos y experiencia práctica en varios lenguajes de programación y tecnologías. Dominé C++ y C#, y me familiaricé con tecnologías .Net como ASP.NET y WPF. También profundicé en la programación de PLC, lo que amplió aún más mis habilidades técnicas. Además, aprendí a crear páginas web con React y a gestionar bases de datos SQL. Esta educación integral me ha dotado de un conjunto diverso de habilidades, lo que me permite abordar desafíos complejos de desarrollo de software y contribuir eficazmente en el campo de la informática.",
        inProgress: 'En progreso'
    },
    sa: {
        langCode: 'sa',
        langName: 'العربية',
        langDirection: 'rtl',
        contact: 'اتصل',
        profile: 'الملف الشخصي',
        projects: 'مشاريع',
        greenPurple: 'أخضر-أرجواني',
        bluePink: 'أزرق-وردي',
        myProjects: 'مشاريعي',
        lightTheme: 'موضوع الضوء',
        createdBy: 'أنشئ بواسطة',
        profileDescription: 'سابع عام في برنامج الهندسة البرمجية بدوام كامل في جامعة بيلسكو-بياوا. لدي خبرة في تطوير تطبيقات الويب (JavaScript، React، Node.js، Vue.js) وتطبيقات سطح المكتب (C#، WPF، Unity). عملت مع قواعد بيانات مختلفة (MySQL، SQL Server، MongoDB) وأدوات DevOps (Docker، Azure DevOps). ابحث عن عمل بدوام جزئي مرن (يمكنني العمل بدوام كامل في سبتمبر) لاكتساب الخبرة المهنية وتطوير مهاراتي.',
        myAccounts: 'حساباتي',
        author: 'أدريان راسزكا',
        seeOnGithub: 'انظر على Github',
        createdAt: 'أنشئت في',
        lastCommit: 'آخر التزام',
        seeRepositoryOnGithub: 'انظر المستودع على Github',
        seeUserOnGithub: 'انظر المستخدم على Github',
        repositoryLinkCopiedToClipboard: 'تم نسخ رابط المستودع إلى الحافظة',
        softwareDdeveloper: 'مطور برامج',
        closeDrawer: 'إغلاق الدرج',
        openDrawer: 'فتح الدرج',
        technicalSchool: 'المدرسة التقنية للميكاترونيك',
        university: 'جامعة بيلسكو-بيالا',
        downloadResume: 'تحميل السيرة الذاتية',
        seeInNewTabResume: 'انظر السيرة الذاتية في علامة تبويب جديدة',
        techStack: 'التكنولوجيا',
        resume: 'السيرة الذاتية',
        langISO: 'ar-SA',
        education: 'التعليم',
        resumeLoadingError: 'حدث خطأ أثناء تحميل السيرة الذاتية',
        showModelIn3D: 'عرض النموذج ثلاثي الأبعاد',
        universitySpecialization: 'تخصص',
        universityStart: 'بداية',
        universityEnd: 'نهاية',
        mechatronics: 'الميكاترونيات',
        technicalSchoolStart: 'بداية المدرسة التقنية',
        technicalSchoolEnd: 'نهاية المدرسة التقنية',
        loadingIsTakingTooLong: 'التحميل يستغرق أكثر من',
        now: 'الآن',
        technicalSchoolDescription: "كخريج من المدرسة التقنية المتخصصة في الميكاترونيك، اكتسبت معرفة شاملة ومهارات عملية في الإلكترونيات والكهرباء وبرمجة المتحكمات المنطقية القابلة للبرمجة (PLC). قدم المنهج الدراسي أساسًا قويًا في هذه المجالات، مع التركيز على التدريب العملي والتطبيقات العملية. هذا التعليم قد زودني بالقدرة على فهم وحل المشاكل التقنية المعقدة، وتصميم وبرمجة متحكمات PLC، والمساهمة بفعالية في مجال الميكاترونيك.",
        universityDescription: "خلال دراستي في الجامعة، اكتسبت معرفة وخبرة عملية واسعة في لغات البرمجة والتقنيات المختلفة. تقنمت في C++ و C#، وتعرفت على تقنيات .Net مثل ASP.NET و WPF. كما تعمقت في برمجة PLC، مما زاد من مهاراتي التقنية. بالإضافة إلى ذلك، تعلمت كيفية إنشاء صفحات ويب باستخدام React وإدارة قواعد بيانات SQL. هذا التعليم الشامل قد زودني بمجموعة متنوعة من المهارات، مما يمكنني من التعامل مع تحديات تطوير البرمجيات المعقدة والمساهمة بفعالية في مجال علوم الكمبيوتر.",
        inProgress: 'قيد التطوير'
    },
}