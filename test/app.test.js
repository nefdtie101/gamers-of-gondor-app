// import mocha and chai
let expect = require('chai').expect;
let request = require('request')


describe('See if api works',function(){
    describe('See if we can get stuff from database',function (){
        it('User',function (done){
            request('/test-user?Username=piettie',
                function (error,response,body){
                expect(body).not.to.be.a('string')
                    done();
                })
        });
        it('Event',function (done){
            request('/test-event?EventName=minecraft',
                function (error,response,body){
                    expect(body).not.to.be.a('string')
                    done();
                })
        })
    })
})
