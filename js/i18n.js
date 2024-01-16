// language source
const languages = {
    "en": {
        en: "English",
        ja: "Japanese",
        ko: "Koean",
        my_name: "My name is",
        myeongkyu: "Myeongkyu Jeon",
        summary: "I am a backend engineer with a major in English Literature. Recently, I studied machine learning and deep learning at the Aivle School.",
        resume: "My resume is here.",
        about: "01. About Me",
        about_detail: "Hello, my name is Myeong-kyu Jeon. I stepped into the IT field driven by a deep interest in simplifying tasks through programming. Currently, I am working as a backend engineer, but I am aiming to become a full-stack engineer.\n\n  I majored in English Literature and Japanese Literature at Chung-Ang University and have experience working as an English teacher for two years. After that, I served as an Air Force officer for three years and three months, during which my passion for programming grew and led me to my current profession.\n\n  After completing a government-funded IT training program, I gained business experience by managing my own website. Most recently, I received big data-related training at KT Aivle School. I have been managing a personal website and a blog, which are temporarily paused due to personal circumstances. I plan to relaunch my personal site on a Linux-based server soon, and my blog is set to be auto-deployed through Vercel.\n\n  During my development journey, I developed an interest in server and environment construction, and I plan to study deeply in the areas of Linux, Network, Docker, Kubernetes, and Cloud.",
        experience: "02. Where I've Worked",
        development: "Software Development",
        not_development: "Non-Development Sector",
        rokaf: "Republic of Korea Air Force",
        rokaf_career: "Base Unit Commander & Operational Control Officer",
        rokaf_at: "@ Republic of Korea Air Force",
        rokaf_work_1: "Overall management of unit assets and supplies",
        rokaf_work_2: "Troop management and leadership",
        rokaf_work_3: "Coordination between outpost and headquarters during shift duties",
        messi_career: "Full-time English Instructor",
        messi_at: "@ Messi",
        messi_work_1: "Conducted various English courses including College Entrance Exam, TOEIC, etc.",
        messi_work_2: "Lesson planning and structuring",
        messi_work_3: "Development of teaching materials and textbooks",
        work: "03. Some Things I’ve Built",
        work_solo: "Personal Project",
        work_team: "Team Project",
        my_dictionary: "A website for learning through tests after saving words from dictionary sites via a Google extension.",
        my_study_materials: "A website for organizing personal study materials. Currently, it only contains my Linux study notes. It was previously serviced through AWS, but is now suspended. Planning to redeploy on-premises.",
        od: "A service that takes user book requests, registers them, and reads them in desired voices using tts and rvc AI modeling. Planning to deploy on-premises.",
        od_work_team: "Team Project / Backend·Frontend Integration",
        manage_words: "A private-use software designed for systematically managing students' vocabulary when tutoring.",
        my_video_viewer: "A private-use software that opens localhost through a GUI and allows you to fetch videos from folders stored on your computer to watch them randomly, similar to TikTok.",


    },

    "ja": {
        en: "英語",
        ja: "日本語",
        ko: "韓国語",
        my_name: "私の名前は",
        myeongkyu: "「ミョンギュウ」です。",
        summary: "私は英語文学を専攻したバックエンドエンジニアです。最近、エイブルスクールで機械学習とディープラーニングを学びました。",
        resume: "履歴書はここをクリックしてください。",
        about: "01. 自己紹介",
        about_detail: "初めまして。私は全銘揆（ジョンミョンギュウ）と申します。プログラミングを通じて作業を簡素化する方法に深い関心を持ってIT分野に足を踏み入れました。現在はバックエンドエンジニアとして活動していますが、フルスタックエンジニアを目指しています。\n\n  中央大学で英文学と日本文学を専攻し、2年間英語教師として働いた経験があります。その後、3年3ヶ月間空軍の将校として勤務し、プログラミングへの情熱が育ち、現在の職業につながりました。\n\n  国費支援のIT教育を修了した後、自分のウェブサイトを運営し、ビジネス経験を積みました。最近では、韓国の通信企業KTが運営するビッグデータ教育を受けました。個人のウェブサイトとブログを運営していましたが、個人的な事情で一時的に中断しています。近いうちにLinuxベースのサーバーで個人サイトを再開する予定であり、ブログはVercelを通じて自動配信される予定です。\n\n  開発の過程でサーバーや環境構築に興味を持ち、Linux、ネットワーク、Docker、Kubernetes、クラウドの分野で深く学ぶ予定です。\n\n  私の技術スタックは次のとおりです。",
        experience: "02. 経歴事項",
        development: "ソフトウェア開発",
        not_development: "非開発部門",
        rokaf: "大韓民国空軍",
        rokaf_career: "基地中隊長・作戦制御士官",
        rokaf_at: "@ 大韓民国空軍",
        rokaf_work_1: "部隊の資産および物資の全体的な管理",
        rokaf_work_2: "兵力の管理と指揮",
        rokaf_work_3: "交代勤務を進行中に前哨と司令部間のコミュニケーションを担当",
        messi_career: "専任英語講師",
        messi_at: "@ Messi",
        messi_work_1: "大学入試、TOEICなど、さまざまな英語コースを実施",
        messi_work_2: "レッスン計画と構造化",
        messi_work_3: "教材および教科書の開発",
        work: "03. プロジェクト",
        work_solo: "個人プロジェクト",
        work_team: "チームプロジェクト",
        my_dictionary: "Googleの拡張機能を通じて辞書サイトから単語を保存し、テストで学習するウェブサイトです。",
        my_study_materials: "個人の学習資料を整理できるウェブサイトです。現在は私が整理したLinuxの学習資料のみが存在します。以前はAWSを通じてサービスしていましたが、現在はサービスを停止しています。オンプレミスで再配布を予定しています。",
        od: "ユーザーが希望する書籍を受け付け、登録し、ttsとrvcのAIモデリングを利用して望む声で読んでくれるサービスです。オンプレミスでの配布を予定しています。",
        od_work_team: "チームプロジェクト / バックエンド·フロントエンド統合",
        manage_words: "家庭教師をする際、生徒の語彙を体系的に管理するために作成したプライベート用ソフトウェアです。",
        my_video_viewer: "GUIを通じてローカルホストを開き、コンピュータに保存されたフォルダから動画を取り込み、TikTokのようにランダムで視聴できるようにしたプライベート用ソフトウェアです。",

    },

    "ko": {
        en: "영어",
        ja: "일본어",
        ko: "한국어",
        my_name: "제 이름은",
        myeongkyu: "전명규입니다.",
        summary: "저는 영어영문학을 전공한 백엔드 엔지니어입니다. 그리고 최근에 에이블스쿨에서 머신러닝/딥러닝에 대해 공부했습니다.",
        resume: "이력서는 여기를 클릭하세요.",
        about: "01. 자기소개",
        about_detail: "  안녕하세요, 저는 전명규입니다. 프로그래밍을 통해 업무를 단순화하는 방법에 대한 깊은 관심으로 IT 분야에 발을 들였습니다. 현재 백엔드 엔지니어로 활동하고 있지만, 풀스택 엔지니어를 목표로 하고 있습니다.\n\n  중앙대학교에서 영어영문학과 일어일문학을 전공했으며, 2년간 영어 강사로 근무한 경험이 있습니다. 이후 3년 3개월간 공군 학사장교로 복무하며, 프로그래밍에 대한 열정을 키웠고, 이는 제 현재 직업으로 이어졌습니다.\n\n  국비지원 IT교육을 수료한 후, 개인 사이트를 운영하며 사업 경험을 쌓았습니다. 가장 최근에는 KT 에이블 스쿨에서 빅데이터 관련 교육을 받았습니다. 개인 사이트와 블로그를 운영 중이었지만, 현재 개인적인 사정으로 잠시 중단한 상태입니다. 추후에 개인 사이트는 리눅스 기반 서버로 재개할 계획이며, 블로그는 Vercel을 통해 자동 배포 예정 중에 있습니다.\n\n  개발 과정에서 서버와 환경 구축에 대한 흥미를 느꼈고, Linux, Network, Docker, Kubernetes, Cloud 분야를 깊이 있게 공부할 예정입니다. \n\n  제 기술 스택은 다음과 같습니다.",
        experience: "02. 경력사항",
        development: "소프트웨어 개발",
        not_development: "비개발 부문",
        rokaf: "대한민국 공군",
        rokaf_career: "기지중대장 및 작전통제장교",
        rokaf_at: "@ 대한민국 공군",
        rokaf_work_1: "전반적인 부대 자산 및 물자 관리",
        rokaf_work_2: "병력 관리 및 지휘",
        rokaf_work_3: "교대근무 진행 및 포대와 사령부 간의 커뮤니케이션 담당",
        messi_career: "전임강사",
        messi_at: "@ Messi",
        messi_work_1: "내신, 수능, 텝스 등 다양한 영어 강좌 진행",
        messi_work_2: "강의 계획 및 구성 작성",
        messi_work_3: "강의 자료 및 교재 개발",
        work: "03. 프로젝트",
        work_solo: "개인 프로젝트",
        work_team: "팀 프로젝트",
        my_dictionary: "구글 확장프로그램(extension)을 통해 사전 사이트에서 단어를 해당 사이트에 저장한 후 테스트를 통해 학습하는 웹사이트입니다.",
        my_study_materials: "개인 공부 자료를 정리할 수 있는 웹사이트입니다. 현재 제가 정리한 리눅스 공부 정리 자료만 존재합니다. AWS를 통해서 서비스를 하고 있었지만 현재는 서비스를 중지했습니다. 온프레미스로 다시 배포 예정에 있습니다.",
        od: "사용자가 원하는 책을 신청받아서 등록하고 해당 도서를 tts와 rvc를 활용한 AI 모델링을 통해 원하는 목소리로 읽어주는 서비스입니다. 온프레미스로 배포 예정에 있습니다.",
        od_work_team: '팀 프로젝트 / 백엔드·프론트엔드 통합',
        manage_words: "과외를 할 때 학생들의 단어를 체계적으로 관리하기 위해서 만든 개인 용도 프로그램입니다.",
        my_video_viewer: "GUI를 통해서 로컬호스트를 열어서, 컴퓨터에 저장된 폴더에서 동영상을 가져와서 Tiktok처럼 무작위로 볼 수 있도록 하는 개인 용도 프로그램입니다.",


    }
};

// i18n
selectLanguage();
function selectLanguage() {

    const ens = document.querySelectorAll('.portfolio_en');
    const jas = document.querySelectorAll('.portfolio_ja');
    const kos = document.querySelectorAll('.portfolio_ko');

    let setLanguage = (lang) => {
        let changeNodeLists = Array.prototype.slice.call(document.querySelectorAll('[data-detect]'));

        changeNodeLists.map(value => {
            value.textContent = languages[lang][value.dataset.detect]
        })
    };

    for (let i = 0; i < 2; i++) {
        ens[i].addEventListener("click", () => {
            setLanguage(ens[i].dataset.lang);
            localStorage.setItem('language', 'en');
        });

        jas[i].addEventListener("click", () => {
            setLanguage(jas[i].dataset.lang);
            localStorage.setItem('language', 'ja');
        });

        kos[i].addEventListener("click", () => {
            setLanguage(kos[i].dataset.lang);
            localStorage.setItem('language', 'ko');
        });
    }

};

getLanguageSetting();
function getLanguageSetting() {

    const setting = localStorage.getItem('language');

    if (setting === null) {
        const locale = getLocale();
        if (locale === 'ko') {
            localStorage.setItem('language', 'ko');
        } else if (locale === 'ja') {
            localStorage.setItem('language', 'ja');
        } else {
            localStorage.setItem('language', 'en');
        }
    }

    const ens = document.querySelectorAll('.portfolio_en');
    const jas = document.querySelectorAll('.portfolio_ja');
    const kos = document.querySelectorAll('.portfolio_ko');

    let setLanguage = (lang) => {
        let changeNodeLists = Array.prototype.slice.call(document.querySelectorAll('[data-detect]'));

        changeNodeLists.map(value => {
            value.textContent = languages[lang][value.dataset.detect]
        })
    };

    for (let i = 0; i < 2; i++) {
        if (setting === 'ko') {
            setLanguage(kos[i].dataset.lang);
        } else if (setting === 'ja') {
            setLanguage(jas[i].dataset.lang);
        } else {
            setLanguage(ens[i].dataset.lang);
        }
    };
};


function getLocale() {
    if (navigator) {
        if (navigator.language) {
            return navigator.language;
        }
        else if (navigator.browserLanguage) {
            return navigator.browserLanguage;
        }
        else if (navigator.systemLanguage) {
            return navigator.systemLanguage;
        }
        else if (navigator.userLanguage) {
            return navigator.userLanguage;
        }
    }
}