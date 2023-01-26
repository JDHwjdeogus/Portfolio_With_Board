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