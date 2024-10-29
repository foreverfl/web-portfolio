// language source
const languages = {
    "en": {
        my_name: "My name is",
        myeongkyu: "Myeongkyu Jeon",
        summary: "I am a full-stack engineer with a major in English Language and Literature. I have also studied machine learning and deep learning.",
        mail_button: "Click here to propose a position via email.",
        mail_title: "Job Opportunity",
        mail_body: "Hi, Myeongkyu",
        about: "01. About Me",
        about_detail: "  Hello, my name is Myeongkyu Jeon. I majored in English and Japanese Literature at Chung-Ang University in Korea and worked as an English teacher for two years. Following this, I served as a commissioned officer in the Air Force for three years and three months, retiring as a first lieutenant.\n\n After discharge, I began programming through a government-supported program and worked as a freelance developer, managing my own site for two years. Later, I completed a big data training program called AIVLE School, operated by KT (the second-largest wireless carrier in South Korea), and I now work as a full-stack engineer with KT CS, a KT group company. \n\nMy focus has been on backend and frontend development, but I am actively expanding my skills to apply machine learning, CI/CD, and blockchain technology to projects. My technical skills are as follows..", experience: "02. Where I've Worked",
        development: "Engineering Department",
        not_development: "Non-Engineering Department",
        ktcs: "KT cs",
        ktcs_career: "Full-Stack Engineer",
        ktcs_at: "@ KT cs",
        ktcs_work_1: "Backend development using Spring Framework",
        ktcs_work_2: "Frontend development using React",
        ktcs_work_3: "Frontend development using Thymeleaf and jQuery",
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
        personal_project: "04. Personal Projects",
        work_solo: "Personal Project",
        work_team: "Team Project",
        my_dictionary: "This is a website where you can save words from dictionary sites through a Google extension and learn them through tests. It is currently being refactored and is set to be deployed with integrated AI features.",
        my_study_materials: "A website where you can organize your personal study materials. It was previously hosted on AWS, but the service was suspended due to personal reasons. It is planned to be redeployed.",
        od: "A service that takes user book requests, registers them, and reads them in desired voices using tts and rvc AI modeling. Planning to deploy on-premises.",
        od_work_team: "Team Project / Backend·Frontend Integration",
        blog: "Feeling the limitations of customization on my original Wordpress blog, I implemented a new blog using Next.js. It supports multilingual processing in Korean and Japanese and allows posts to be written in Markdown.",
        manage_words: "A private-use software designed for systematically managing students' vocabulary when tutoring.",
        my_video_viewer: "A private-use software that opens localhost through a GUI and allows you to fetch videos from folders stored on your computer to watch them randomly, similar to TikTok.",


    },

    "ja": {
        my_name: "私の名前は",
        myeongkyu: "「ミョンギュウ」です。",
        summary: "私は英語英文学を専攻したフルスタックエンジニアです。また、機械学習とディープラーニングについても学びました。",
        mail_button: "メールでポジションを提案する。",
        mail_title: "ポジション提案",
        mail_body: "こんにちは、ミョンギュさん",
        about: "01. 自己紹介",
        about_detail: "  こんにちは、私の名前はジョン・ミョンギュです。韓国の中央大学で英語英文学と日本語日本文学を専攻し、2年間英語教師として働きました。その後、3年3か月空軍士官として勤務し、中尉で満期除隊しました。\n\n 除隊後、政府支援プログラムでプログラミングを学び、2年間フリーランス開発者として個人サイトを運営しました。その後、韓国の通信事業者KTが運営するビッグデータ研修「AIVLE School」を修了し、現在はKTグループ会社KT CSに所属しフルスタックエンジニアとして活動しています。\n\n現在はバックエンドとフロントエンド開発に注力しつつ、機械学習、CI/CD、ブロックチェーン技術をプロジェクトに応用できるよう継続して学習しています。\n\n 私の技術スタックは以下のようになります。", experience: "02. 経歴事項",
        development: "技術開発部門",
        not_development: "その他部門",
        ktcs: "KT cs",
        ktcs_career: "フルスタックエンジニア",
        ktcs_at: "@ KT cs",
        ktcs_work_1: "Spring Frameworkを使用したバックエンド開発",
        ktcs_work_2: "Reactを使用したフロントエンド開発",
        ktcs_work_3: "ThymeleafおよびjQueryを使用したフロントエンド開発",
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
        personal_project: "04. 個人プロジェクト",
        work_solo: "個人プロジェクト",
        work_team: "チームプロジェクト",
        my_dictionary: "Googleの拡張機能を利用して辞書サイトから単語を保存し、テストを通じて学習するウェブサイトです。現在、リファクタリング中であり、AI機能を統合して配布予定です。",
        my_study_materials: "個人の学習資料を整理できるウェブサイトです。以前はAWSを通じてサービスを提供していましたが、個人的な事情で現在サービスを中断しています。再配布の予定です。",
        od: "ユーザーが希望する書籍を受け付け、登録し、ttsとrvcのAIモデリングを利用して望む声で読んでくれるサービスです。オンプレミスでの配布を予定しています。",
        od_work_team: "チームプロジェクト / バックエンド·フロントエンド統合",
        blog: "元のWordpressブログのカスタマイズの限界を感じて、Next.jsを使用して直接実装したブログです。韓国語/日本語の多言語処理をサポートし、Markdownで投稿を作成します。",
        manage_words: "家庭教師をする際、生徒の語彙を体系的に管理するために作成したプライベート用ソフトウェアです。",
        my_video_viewer: "GUIを通じてローカルホストを開き、コンピュータに保存されたフォルダから動画を取り込み、TikTokのようにランダムで視聴できるようにしたプライベート用ソフトウェアです。",

    },

    "ko": {
        my_name: "제 이름은",
        myeongkyu: "전명규입니다.",
        summary: "저는 영어영문학을 전공한 풀스택 엔지니어입니다. 그리고 머신러닝/딥러닝에 대해서도 공부했습니다.",
        mail_button: "이메일로 포지션 제안하기",
        mail_title: "포지션 제안",
        mail_body: "안녕하세요, 명규님",
        about: "01. 자기소개",
        about_detail: "  안녕하세요, 저는 전명규라고 합니다. 중앙대학교에서 영어영문학과 일어일문학을 전공했으며, 2년간 영어 강사로 근무했습니다. 이후 3년 3개월간 공군 학사장교로 복무를 마치고 중위로서 만기 제대를 했습니다.\n\n  전역 후에는 국비 지원 교육을 통해 프로그래밍에 입문하게 되었고, 2년 간 개인 사이트를 운영하는 개인개발자로서 활동했습니다. 이후에는 KT에서 운영하는 빅데이터 교육인 에이블스쿨을 수료하고 현재는 그룹사인 KT cs에서 소속 풀스택 엔지니어로서 활동하고 있습니다.\n\n  지금까지는 백엔드, 프론트엔드를 중심으로 개발을 진행했지만, 지속적인 학습을 통해 머신러닝/딥러닝, CI/CD, 블록체인 등 다양한 분야의 기술을 프로젝트에 적용하고 발전시키는 개발자를 목표로 하고 있습니다. \n\n  제 기술 스택은 다음과 같습니다.", experience: "02. 경력사항",
        development: "개발 부문",
        not_development: "비개발 부문",
        ktcs: "KT cs",
        ktcs_career: "풀스택 엔지니어",
        ktcs_at: "@ KT cs",
        ktcs_work_1: "Spring Framework를 활용한 백엔드 개발",
        ktcs_work_2: "React를 활용한 프론트엔드 개발",
        ktcs_work_3: "Thymeleaf 및 Jquery를 활용한 프론트엔드 개발",
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
        personal_project: "04. 개인 프로젝트",
        work_solo: "개인 프로젝트",
        work_team: "팀 프로젝트",
        my_dictionary: "구글 확장프로그램(extension)을 통해 사전 사이트에서 단어를 해당 사이트에 저장한 후 테스트를 통해 학습하는 웹사이트입니다. 현재 리팩토링을 진행 중에 있으며, AI 기능을 통합해서 배포 예정에 있습니다.",
        my_study_materials: "개인 공부 자료를 정리할 수 있는 웹사이트입니다. AWS를 통해서 서비스를 하고 있었지만 개인적인 사정으로 현재는 서비스를 중단했습니다. 다시 배포 예정에 있습니다.",
        od: "사용자가 원하는 책을 신청받아서 등록하고 해당 도서를 tts와 rvc를 활용한 AI 모델링을 통해 원하는 목소리로 읽어주는 서비스입니다. 에이블스쿨 최종 프로젝트로써, 로컬로만 구현 완료했습니다.",
        od_work_team: '팀 프로젝트 / 백엔드·프론트엔드 통합',
        blog: "기존의 Wordpress 블로그에서 커스터마이징의 한계를 느끼고, Next.js로 직접 구현한 블로그입니다. 한국어/일본어 다국어 처리를 지원하고 Markdown으로 포스트를 작성합니다.",
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
    const emailLink = document.getElementById('email');

    // 언어 설정
    let setLanguage = (lang) => {
        let changeNodeLists = Array.prototype.slice.call(document.querySelectorAll('[data-detect]'));

        changeNodeLists.map(value => {
            value.textContent = languages[lang][value.dataset.detect]
        })

        // 이메일 내용 설정하기
        let emailSubject = languages[lang].mail_title;
        let emailBody = languages[lang].mail_body;
        emailLink.href = `mailto:forever_fl@naver.com?subject=${emailSubject}&body=${emailBody}`;
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
    const emailLink = document.getElementById('email');

    let setLanguage = (lang) => {
        let changeNodeLists = Array.prototype.slice.call(document.querySelectorAll('[data-detect]'));

        changeNodeLists.map(value => {
            value.textContent = languages[lang][value.dataset.detect]
        })

        // 이메일 내용 설정하기
        let emailSubject = languages[lang].mail_title;
        let emailBody = languages[lang].mail_body;
        emailLink.href = `mailto:forever_fl@naver.com?subject=${emailSubject}&body=${emailBody}`;
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