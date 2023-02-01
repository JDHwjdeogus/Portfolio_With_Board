    // 드롭다운 메뉴 토글
    $('.subMenuUl').hide();
    $(".mainList a").click(function () {
        $(this).parent(".mainList").children("ul").slideToggle("100");
        $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");
    });


    // 메뉴(프로젝트 리스트) 선택
    let highlight;

    function addClass(target) {
        target.classList.add('selector-item--active');
    }

    function selectItem(event) {
        const target = event.target;
        const items = document.querySelectorAll('.selector-item');
        const parent = document.querySelector('.selector');
        const targetRect = target.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();
        
        items.forEach(el => el.classList.remove('selector-item--active'));

        highlight.style.left = `${targetRect.left - parentRect.left}px`;
        
        addClass(target);
        setHighlightWidth(target);
    }

    function setHighlightWidth(target = null) {
        const itemTarget = target || document.querySelector('.selector-item');
        const rect = itemTarget.getBoundingClientRect();
        
        addClass(itemTarget)
        
        highlight = document.querySelector('.highlight');
        highlight.style.width = `${rect.width}px`;
    }

    setHighlightWidth();

    function alertIncomplete() {
        alert("서비스 준비 중... 🛠");
    }


    // 프로젝트 탭 변경 
    const tabList = document.querySelectorAll('.tab_menu .projectNameList .selector .selector-item');
    const contents = document.querySelectorAll('.tab_menu .tabMenuContent')
    let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#item1 활성화)

    for(var i = 0; i < tabList.length; i++){
        tabList[i].querySelector('.selector-item a').addEventListener('click', function(e){
            e.preventDefault();
            for(var j = 0; j < tabList.length; j++){
                // 나머지 버튼 클래스 제거
                tabList[j].classList.remove('active');

                // 나머지 컨텐츠 display:none 처리
                contents[j].style.display = 'none';
            }

            // 버튼 관련 이벤트
            this.parentNode.classList.add('active');

            // 버튼 클릭시 컨텐츠 전환
            activeCont = this.getAttribute('href');
            // console.log(activeCont);
            document.querySelector(activeCont).style.display = 'block';
        });
    }