 $(function(){

 	//ham thoi gian de cho slide tu dong chay sau 3s
 	var thoigian = setInterval(function(){
 		$(".next").trigger('click');
 	},3000)

 	// xu ly cho nut next
 	$(".next").click(function(event) {

 		// clearInterval(thoigian);//huy viec chay tu dong di
 		var sau = $(".active").next();

 		//xu ly cho phan nut
 		var vitri = $(".xanh").index() + 1;
 		$(".nutslide ul li").removeClass('xanh');
 		if(vitri == $(".nutslide ul li ").length){
 			vitri = 0;
 		}
 		$(".nutslide ul li:nth-child("+ (vitri + 1) + ")").addClass("xanh");

 		//xu ly cho phan slide
 		if(sau.length == 0)//co nghia la den slide cuoi cung roi
 		{
 			$(".active").addClass('bien-mat-o-ben-trai').one('webkitAnimationEnd', function(event) {//one('webkitAnimationEnd', function(event){} la ham doi chuyen dong xong thi moi lam gi gi thi lam
 			$(".bien-mat-o-ben-trai").removeClass('bien-mat-o-ben-trai')
 			});

 			$(".anhslide ._1slide:first-child").addClass('di-vao-tu-ben-phai').one('webkitAnimationEnd', function(event) {
 				//bo active
	 			$(".active").removeClass('active');

	 			//cho cai slide sau duoc active
	 			$(".di-vao-tu-ben-phai").addClass("active").removeClass('di-vao-tu-ben-phai');
	 			});
 		}
 		else{
		 		// code cho phan addClass ban dau
		 		$(".active").addClass('bien-mat-o-ben-trai').one('webkitAnimationEnd', function(event) {//one('webkitAnimationEnd', function(event){} la ham doi chuyen dong xong thi moi lam gi gi thi lam
		 			$(".bien-mat-o-ben-trai").removeClass('bien-mat-o-ben-trai')
		 			});
		 		sau.addClass('di-vao-tu-ben-phai').one('webkitAnimationEnd', function(event) {//one('webkitAnimationEnd', function(event){} la ham doi chuyen dong xong thi moi lam gi gi thi lam

		 			//bo active
		 			$(".active").removeClass('active');

		 			//cho cai slide sau duoc active
		 			$(".di-vao-tu-ben-phai").addClass("active").removeClass('di-vao-tu-ben-phai');
		 		});
 			}
 	});	 //end nut next


 	//xu ly cho nut prev
 	$(".prev").click(function(event) {

 		//clearInterval(thoigian); //huy viec chay tu dong di
 		var truoc = $(".active").prev();

 		//xu ly cho phan nut
 		var vitri = $(".xanh").index() + 1;
 		$(".nutslide ul li").removeClass('xanh');
 		if(vitri == 1){
 			vitri = $(".nutslide ul li").length + 1;
 		}
 		$(".nutslide ul li:nth-child("+ (vitri - 1) + ")").addClass("xanh");
 		if(truoc.length ==1){
 			$(".active").addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd', function(event) {//one('webkitAnimationEnd', function(event){} la ham doi chuyen dong xong thi moi lam gi gi thi lam
 			$(".bien-mat-o-ben-phai").removeClass('bien-mat-o-ben-phai')
 			});

			truoc.addClass('di-vao-tu-ben-trai').one('webkitAnimationEnd', function(event) {//one('webkitAnimationEnd', function(event){} la ham doi chuyen dong xong thi moi lam gi gi thi lam

	 			//bo active
	 			$(".active").removeClass('active');

	 			//cho cai slide sau duoc active
	 			$(".di-vao-tu-ben-trai").addClass("active").removeClass('di-vao-tu-ben-trai');
	 		});
 		}
 		else{
	 			$(".active").addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd', function(event) {//one('webkitAnimationEnd', function(event){} la ham doi chuyen dong xong thi moi lam gi gi thi lam
	 			$(".bien-mat-o-ben-phai").removeClass('bien-mat-o-ben-phai')
	 			});

				$(".anhslide ._1slide:last-child").addClass('di-vao-tu-ben-trai').one('webkitAnimationEnd', function(event) {//one('webkitAnimationEnd', function(event){} la ham doi chuyen dong xong thi moi lam gi gi thi lam

		 			//bo active
		 			$(".active").removeClass('active');

		 			//cho cai slide sau duoc active
		 			$(".di-vao-tu-ben-trai").addClass("active").removeClass('di-vao-tu-ben-trai');
		 		});
 			}
 	
 	});


 	//xu ly cho nut chuyen slide ben duoi
 	$(".nutslide ul li").click(function(event) {
 		$(".nutslide ul li").removeClass('xanh');//tat ca khong co nut nao xanh ca
 		$(this).addClass('xanh');//this = nut duoc click

 		//code xu ly cho slide

 		//cho slide hien tai bien mat
 		$(".active").addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd', function(event) {//one('webkitAnimationEnd', function(event){} la ham doi chuyen dong xong thi moi lam gi gi thi lam
		$(".bien-mat-o-ben-phai").removeClass('bien-mat-o-ben-phai')
		});

 		//$(this).index() + 1 la ham tinh vi tri hien tai cua phan tu duoc click
 		//$(this).index() + 1 no tinh tu vi tri 0
		$(".anhslide ._1slide:nth-child("+ ($(this).index() + 1) + ")").addClass('di-vao-tu-ben-trai').one('webkitAnimationEnd', function(event) {//one('webkitAnimationEnd', function(event){} la ham doi chuyen dong xong thi moi lam gi gi thi lam

 			//bo active
 			$(".active").removeClass('active');

 			//cho cai slide sau duoc active
 			$(".di-vao-tu-ben-trai").addClass("active").removeClass('di-vao-tu-ben-trai');
 		});
 	});
})  
 