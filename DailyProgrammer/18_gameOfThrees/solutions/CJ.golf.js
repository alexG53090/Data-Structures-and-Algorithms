l=console.log;g=v=>v==1?l(v):(m=[0,-1,1][v%3],l(v,m),g((v+m)/3))
g(100)
