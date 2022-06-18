const express = require('express');
const passport = require('passport');
const CharacterDiary = require('../../models/CharacterDiary');


const router = express.Router();



router.get('/user/:user_id', (req, res) => {
    CharacterDiary.find({ userId: req.params.user_id})
        .then(characters => res.json(characters))
        .catch(err =>
            res.status(404).json({ noCharactersFound: 'There are no characters in your diary'}
            )
        );
});


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        
        const newCharacterDiary = new CharacterDiary({
            character: req.body.character,
            userId: req.body.user_id,
            definition: req.body.definition,
            pinyin: req.body.pinyin
        });
        

        newCharacterDiary.save().then(character => res.json(character));
    }
);

router.delete('/:character_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        
        CharacterDiary.findOneAndDelete({ _id: req.params.character_id })
            .then(character => res.json(character))
    }
);
 

module.exports = router;




