var expect = chai.expect;

describe('War Game', function() {
    describe('#Shuffle (Test1)', function(){
        it("Length of array should equal 5", function() {
            const x = shuffle([1,2,3,4,5]);
            expect(x.length).to.equal(5);
        });
    });

describe('Player Class (Test 2)', function() {
    it('has a name', function(){
        const player = new Player ('Cool Name');
        expect(player.name).to.equal('Cool Name');
    })
})

describe('#Slice (Test 3)', function() {
    it('Should take one array and slice it into two arrays without changing the main array', function() {
        const x = [1,2,3,4,5,6];
        const arr1 = splitDeck(x);
        expect(x.length).to.equal(6);
    })
})
})
