/* DEMO 1 - render template */
router.get('/demo1', function(req, res, next) {
  res.render(
                'demo1', 
                { 
                    message: 'Lorem ipsum sit dolor amet', 
                    user: {name:'Rachmat gunawan', email:'nawan44@example.com', website: 'http://www.rachmatgunawan.com'} 
                }
            );
});