function callServer(){
	//javaScript로 서버쪽 프로그램을 호출
	//ajax를 이용해서 처리해 보아요
	//순수 javascript가 아닌 jQuery로 ajax를 이용
	$.ajax({
		//호출할 서버쪽 프로그램의 url
		url : "http://localhost:8080/AJAXTest/add",
		//타입은 전송방식을 지칭
		type : "get",
		//데이터는 서버로 전송할 데이터를 지칭
		data : {
			first : $("#first").val(),
			second : $("#second").val()
		},
		success : function(data){
			$("span").text(data);
		},
		error : function(){
			alert("뭔가 이상해요.ajax처리가 잘 안됫어요.");
		}
		
	});
}