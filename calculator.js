
	ans="";
		function Calculator($scope)
		{

			
			$scope.opp=function(op)
			{
				switch(op)
				{
					case '+' : ans=parseInt($scope.op1)+parseInt($scope.op2);
					break;
					case '-' : ans=parseInt($scope.op1)-parseInt($scope.op2);
					break;
					case '*' : ans=parseInt($scope.op1)*parseInt($scope.op2);
					break;
					case '/' : ans=parseInt($scope.op1)/parseInt($scope.op2);
					break;
				}
				
			}
			$scope.answer=function()
			{
				if(!isNaN(ans))
				{
					return ans;
				}
				
			}
			$scope.clear=function()
			{
				$scope.op1="";
				$scope.op2="";
				ans="";
			}
		}