import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, Animated, Easing } from 'react-native';
import Constants from 'expo-constants';

import { Video } from "expo";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    constructor () {
      super()
      this.animatedValue = new Animated.Value(0)
    }
    componentDidMount () {
      this.animate()
    }
    animate () {
      this.animatedValue.setValue(0)
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1.5,
          duration: 40000,
          easing: Easing.linear
        }
      ).start(() => this.animate())
    }
    state = {
        introPageDisplay: 'none',
        gamePageDisplay: 'none',
        standingsPageDisplay: 'none',
        videoDisplay: 'block',
        playerOne: 'Player 1 Name',
        playerTwo: 'Player 2 Name',
        categoryOneQuestions: 'none',
        categoryTwoQuestions: 'none',
        categoryThreeQuestions: 'none',
        categoryFourQuestions: 'none',
        playerOneAnswer: '',
        playerTwoAnswer: '',
        playerOnePoints: 0,
        playerTwoPoints: 0,
        sportsIndex: 0,
        popCultureIndex: 0,
        geographyIndex: 0,
        foodIndex: 0, 
        endText: '',
        playerOneCorrect: '',
        playerTwoCorrect: '',
        
        sportsButtonDisabled: false, 
        popCultureButtonDisabled: false,
        geogButtonDisabled: false,
        foodButtonDisabled: false,
        
        sportsQuestions: [
            {
                question: 'How many points does a touchdown count for?',
                answer: 'd',
                points: 100,
                choices: ['a. 7', 'b. 5', 'c. 4', 'd. 6'],
            },
            {
                question: 'How many minutes does one inning last?',
                answer: 'd',
                points: 200,
                choices: ['a. 25', 'b. 30', 'c. 35', 'd. None of the above'],
            },
            {
                question: 'Who has the most Olympic medals?',
                answer: 'd',
                points: 300,
                choices: ['a. Usain Bolt', 'b. Mo Farah', 'c. Lebron James', 'd. Michael Phelps'],
            },
            {
                question: 'Which country was Kyrie Irwing born in?',
                answer: 'b',
                points: 400,
                choices: ['a. USA', 'b. Australia', 'c. Great Britain', 'd. Spain'],
            }
        ],
        popCultureQuestions: [
            {
                question: 'What is the highest grossing film of all time?',
                answer: 'd',
                points: 100,
                choices: ['a. Avatar', 'b. Avengers: Infinity War', 'c. Star Wars: Return of the Jedi', 'd. Avengers: Endgame'],
            },
            {
                question: 'How many kids does Angelina Jolie have?',
                answer: 'c',
                points: 200,
                choices: ['a. 3', 'b. 5', 'c. 6', 'd. 4'],
            },
            {
                question: 'Who is the voice actor for Po from Kung Fu Panda?',
                answer: 'b',
                points: 300,
                choices: ['a. Will Smith', 'b. Jack Black', 'c. Kevin Hart', 'd. Adam Sandler']
            },
            {
                question: 'What is the name of the main character (IRL) in the Matrix films?',
                answer: 'c',
                points: 400,
                choices: ['a. Brad Pitt', 'b. Tom Cruise', 'c. Keanu Reaves', 'd. Jason Stathum'],
            },
        ],
        geographyQuestions: [
            {
                question: 'What is the capital of Arizona?',
                answer: 'd',
                points: 100,
                choices: ['a. Los Angeles', 'b. Springfield', 'c. Las Vegas', 'd. Phoenix'],
            }, 
            {
                question: 'True or False -  There are no deserts in Europe?',
                answer: 'a',
                points: 200,
                choices: ['a. True', 'b. False', 'c. Maybe', 'd. IDK'],
            }, 
            {
                question: 'What is the largest non-continental island in the world?',
                answer: 'c',
                points: 300,
                choices: ['a. Iceland', 'b. Russia', 'c. Greenland', 'd. Australia'],
            }, 
            {
                question: 'What year is on the flag of Wisconsin?',
                answer: 'a',
                points: 400,
                choices: ['a. 1848', 'b. 1868', 'c. 1858', 'd. 1838'],
            }, 
        ],
        foodQuestions: [
            {
                question: 'What fast food restaurant sells the Big Mac?',
                answer: 'd',
                points: 100,
                choices: ['a. Burger King', 'b. Wendys', 'c. Taco Bell', 'd. McDonalds'],
            },
            
            {
                question: 'What nutrient do you get from the meat, poultry, eggs, and fish?',
                answer: 'd',
                points: 200,
                choices: ['a. Dairy', 'b. Grains', 'c. Fruit', 'd. Protein'], 
            },
            {
                question: 'True or False - Almonds are considered seeds, not nuts.',
                answer: 'b',
                points: 300,
                choices: ['a. False', 'b.True', 'c. Maybe', 'd. IDK'], 
            },
            {
                question: 'What important mineral is found in dairy foods such as milk and cheese?',
                answer: 'b',
                points: 400,
                choices: ['a. Potassium', 'b. Calcium', 'c. Chloride', 'd. Sodium'],
            },
            
        ],
    };
    handleTeamPagePress = () => this.setState(state => ({
        introPageDisplay: 'block',
        gamePageDisplay: 'none',
        standingsPageDisplay: 'none',
        categoryOneQuestions: 'none',
        categoryTwoQuestions: 'none',
        categoryThreeQuestions: 'none',
        categoryFourQuestions: 'none',
        videoDisplay: 'none',

    }));
    handleGamePagePress = () => this.setState(state => ({
        introPageDisplay: 'none',
        gamePageDisplay: 'block',
        standingsPageDisplay: 'none',
        categoryOneQuestions: 'none',
        categoryTwoQuestions: 'none',
        categoryThreeQuestions: 'none',
        categoryFourQuestions: 'none',
        videoDisplay: 'none',
    }));
    handleStandingsPagePress = () => this.setState(state => ({
        introPageDisplay: 'none',
        gamePageDisplay: 'none',
        standingsPageDisplay: 'block',
        categoryOneQuestions: 'none',
        categoryTwoQuestions: 'none',
        categoryThreeQuestions: 'none',
        categoryFourQuestions: 'none',
        videoDisplay: 'none',
    }));
    handleCategoryOnePress = () => this.setState(state => ({
        categoryOneQuestions: 'block',
        gamePageDisplay: 'none',
        standingsPageDisplay: 'none',
        introPageDisplay: 'none',
        categoryTwoQuestions: 'none',
        categoryThreeQuestions: 'none',
        categoryFourQuestions: 'none',
        videoDisplay: 'none',
    }));
    handleCategoryTwoPress = () => this.setState(state => ({
        categoryOneQuestions: 'none',
        gamePageDisplay: 'none',
        standingsPageDisplay: 'none',
        introPageDisplay: 'none',
        categoryTwoQuestions: 'block',
        categoryThreeQuestions: 'none',
        categoryFourQuestions: 'none',
        videoDisplay: 'none',
    }));
    handleCategoryThreePress = () => this.setState(state => ({
        categoryOneQuestions: 'none',
        gamePageDisplay: 'none',
        standingsPageDisplay: 'none',
        introPageDisplay: 'none',
        categoryTwoQuestions: 'none',
        categoryThreeQuestions: 'block',
        categoryFourQuestions: 'none',
        videoDisplay: 'none',
    }));
    handleCategoryFourPress = () => this.setState(state => ({
        categoryOneQuestions: 'none',
        gamePageDisplay: 'none',
        standingsPageDisplay: 'none',
        introPageDisplay: 'none',
        categoryTwoQuestions: 'none',
        categoryThreeQuestions: 'none',
        categoryFourQuestions: 'block',
        videoDisplay: 'none',
    }));
    handleVideoDisplay = () => this.setState(state => ({
        categoryOneQuestions: 'none',
        gamePageDisplay: 'none',
        standingsPageDisplay: 'none',
        introPageDisplay: 'block',
        categoryTwoQuestions: 'none',
        categoryThreeQuestions: 'none',
        categoryFourQuestions: 'none',
        videoDisplay: 'none',
    }));
    handleSportsAnswer = () => {
        if (this.state.playerOneAnswer.toLowerCase() == this.state.sportsQuestions[this.state.sportsIndex].answer) {
            this.setState({
                playerOnePoints: this.state.playerOnePoints + this.state.sportsQuestions[this.state.sportsIndex].points,
                playerOneAnswer: '',
                playerOneCorrect: 'correct',
            })
        }
        else {
            this.setState({
                playerOnePoints: this.state.playerOnePoints - this.state.sportsQuestions[this.state.sportsIndex].points,
                playerOneAnswer: '',
                playerOneCorrect: 'incorrect',
            })
        }
        if (this.state.playerTwoAnswer.toLowerCase() == this.state.sportsQuestions[this.state.sportsIndex].answer) {
            this.setState({
                playerTwoPoints: this.state.playerTwoPoints + this.state.sportsQuestions[this.state.sportsIndex].points,
                playerTwoAnswer: '',
                playerTwoCorrect: 'correct',
            })
        }
        else {
            this.setState({
                playerTwoPoints: this.state.playerTwoPoints - this.state.sportsQuestions[this.state.sportsIndex].points,
                playerTwoAnswer: '',
                playerTwoCorrect: 'incorrect'
            })
        }
        if (this.state.sportsIndex < 3) {
            this.setState({
                sportsIndex: this.state.sportsIndex + 1,    
            })
        }
        else {
            this.setState({
                categoryOneQuestions: 'none',
                gamePageDisplay: 'none',
                standingsPageDisplay: 'none',
                introPageDisplay: 'block',
                categoryTwoQuestions: 'none',
                categoryThreeQuestions: 'none',
                categoryFourQuestions: 'none',  
                sportsButtonDisabled: true,
            })
        }
        
        
    };
    handlePopCultAnswer = () => {
        if (this.state.playerOneAnswer.toLowerCase() == this.state.popCultureQuestions[this.state.popCultureIndex].answer) {
            this.setState({
                playerOnePoints: this.state.playerOnePoints + this.state.popCultureQuestions[this.state.popCultureIndex].points,
                playerOneAnswer: '',
                playerOneCorrect: 'correct',
            })
        }
        else {
            this.setState({
                playerOnePoints: this.state.playerOnePoints - this.state.popCultureQuestions[this.state.popCultureIndex].points,
                playerOneAnswer: '',
                playerOneCorrect: 'incorrect',
            })
        }
        if (this.state.playerTwoAnswer.toLowerCase() == this.state.popCultureQuestions[this.state.popCultureIndex].answer) {
            this.setState({
                playerTwoPoints: this.state.playerTwoPoints + this.state.popCultureQuestions[this.state.popCultureIndex].points,
                playerTwoAnswer: '',
                playerTwoCorrect: 'correct',
            })
        }
        else {
            this.setState({
                playerTwoPoints: this.state.playerTwoPoints - this.state.popCultureQuestions[this.state.popCultureIndex].points,
                playerTwoAnswer: '',
                playerTwoCorrect: 'incorrect',
            })
        }
        if (this.state.popCultureIndex < 3) {
            this.setState({
                popCultureIndex: this.state.popCultureIndex + 1,    
            })
        }
        else {
            this.setState({
                categoryOneQuestions: 'none',
                gamePageDisplay: 'none',
                standingsPageDisplay: 'none',
                introPageDisplay: 'block',
                categoryTwoQuestions: 'none',
                categoryThreeQuestions: 'none',
                categoryFourQuestions: 'none',  
                popCultureButtonDisabled: true,
            })
        }
        
        
    };
    handleGeographyAnswer = () => {
        if (this.state.playerOneAnswer.toLowerCase() == this.state.geographyQuestions[this.state.geographyIndex].answer) {
            this.setState({
                playerOnePoints: this.state.playerOnePoints + this.state.geographyQuestions[this.state.geographyIndex].points,
                playerOneAnswer: '',
                playerOneCorrect: 'correct',
            })
        }
        else {
            this.setState({
                playerOnePoints: this.state.playerOnePoints - this.state.geographyQuestions[this.state.geographyIndex].points,
                playerOneAnswer: '',
                playerOneCorrect: 'incorrect',
            })
        }
        if (this.state.playerTwoAnswer.toLowerCase() == this.state.geographyQuestions[this.state.geographyIndex].answer) {
            this.setState({
                playerTwoPoints: this.state.playerTwoPoints + this.state.geographyQuestions[this.state.geographyIndex].points,
                playerTwoAnswer: '',
                playerTwoCorrect: 'correct',
            })
        }
        else {
            this.setState({
                playerTwoPoints: this.state.playerTwoPoints - this.state.geographyQuestions[this.state.geographyIndex].points,
                playerTwoAnswer: '',
                playerTwoCorrect: 'incorrect',
            })
        }
        if (this.state.geographyIndex < 3) {
            this.setState({
                geographyIndex: this.state.geographyIndex + 1,    
            })
        }
        else {
            this.setState({
                categoryOneQuestions: 'none',
                gamePageDisplay: 'none',
                standingsPageDisplay: 'none',
                introPageDisplay: 'block',
                categoryTwoQuestions: 'none',
                categoryThreeQuestions: 'none',
                categoryFourQuestions: 'none',  
                geogButtonDisabled: true,
            })
        }
        
        
    };
    handleFoodAnswer = () => {
        if (this.state.playerOneAnswer.toLowerCase() == this.state.foodQuestions[this.state.foodIndex].answer) {
            this.setState({
                playerOnePoints: this.state.playerOnePoints + this.state.foodQuestions[this.state.foodIndex].points,
                playerOneAnswer: '',
                playerOneCorrect: 'correct',
            })
        }
        else {
            this.setState({
                playerOnePoints: this.state.playerOnePoints - this.state.foodQuestions[this.state.foodIndex].points,
                playerOneAnswer: '',
                playerOneCorrect: 'incorrect',
            })
        }
        if (this.state.playerTwoAnswer.toLowerCase() == this.state.foodQuestions[this.state.foodIndex].answer) {
            this.setState({
                playerTwoPoints: this.state.playerTwoPoints + this.state.foodQuestions[this.state.foodIndex].points,
                playerTwoAnswer: '',
                playerTwoCorrect: 'correct',
            })
        }
        else {
            this.setState({
                playerTwoPoints: this.state.playerTwoPoints - this.state.foodQuestions[this.state.foodIndex].points,
                playerTwoAnswer: '',
                playerTwoCorrect: 'incorrect',
            })
        }
        if (this.state.foodIndex < 3) {
            this.setState({
                foodIndex: this.state.foodIndex + 1,    
            })
        }
        else {
            this.setState({
                categoryOneQuestions: 'none',
                gamePageDisplay: 'none',
                standingsPageDisplay: 'none',
                introPageDisplay: 'block',
                categoryTwoQuestions: 'none',
                categoryThreeQuestions: 'none',
                categoryFourQuestions: 'none',  
                foodButtonDisabled: true,
            })
        }
        
        
    };
    handleWinnerOrLoserText = () => {
        if (this.state.sportsButtonDisabled == true && this.state.popCultureButtonDisabled == true && this.state.geogButtonDisabled == true && this.state.foodButtonDisabled == true) {
            if (this.state.playerOnePoints > this.state.playerTwoPoints) {
                this.setState({
                    endText: this.state.playerOne + ' won!!!:)',
                })
            }
            if (this.state.playerTwoPoints > this.state.playerOnePoints) {
                this.setState({
                    endText: this.state.playerTwo + ' won!!!:)',
                })
            }
            if (this.state.playerOnePoints == this.state.playerTwoPoints) {
                this.setState({
                    endText: this.state.playerOne + ' and ' + this.state.playerTwo + ' tied:(',
                })
            }
        }
        
        
        
    };
    _playerOne = playerOne => {
        this.setState({ playerOne });
    };
    _playerTwo = playerTwo => {
        this.setState({ playerTwo });
    };
     _playerOneAnswer = playerOneAnswer => {
        this.setState({ playerOneAnswer });
    };
     _playerTwoAnswer = playerTwoAnswer => {
        this.setState({ playerTwoAnswer });
    };
    
    render() {
        {/*https://blog.bitsrc.io/making-animations-in-react-native-the-simplified-guide-6580f961f6e8*/}
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-200, 200]
        })
        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        })
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [-200, 200, 0]
        })
        const movingMarginTwo = this.animatedValue.interpolate({
            inputRange: [0,0.5,1],
            outputRange: [-400, 200, 0],
        })
        const rotateX = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '180deg', '0deg']
        })
        {/*For loops*/}
        var sportsQuesAnswers = [];
        var popCultQuesAnswers = [];
        var geogQuesAnswers = [];
        var foodQuesAnswers = [];
            sportsQuesAnswers.push(
    			<Text style={styles.defaultTextBlack}>
                    {this.state.sportsQuestions[0].question}
                </Text>
    		)
    		for(let i = 0; i < 4; i++){
    		        sportsQuesAnswers.push(
    			        <Text style={styles.defaultTextBlack}>
                            {this.state.sportsQuestions[0].choices[i]}
                    </Text>
    		        )
            }
        
        return (
            <View style={styles.container}>
                <View style={{ display: this.state.videoDisplay }}>
                    
                    <View style={styles.mainComponentOne}>
                        
                        <Text style={styles.defaultTextBlack}>
                            Ad: Trailer for the next movie: 1: 29
                        </Text>
                        
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/44ec2cbd48d7868bee8c63c73ea21a22' }}
                            style={{ height: deviceHeight/2, width: deviceWidth }}
                        />
                        
                        <TouchableHighlight
                            onPress={this.handleVideoDisplay}
                        >
                        
                            <View style={styles.navButton}>
                                <Text style={styles.navButtonText}>
                                    Skip Ad
                                </Text>
                            
                            </View>
                        </TouchableHighlight>
                        
                    </View>
                </View>
                {/*This is the intro page display*/}
                <View style={{ display: this.state.introPageDisplay }}>
                    
                    <View style={styles.mainComponentOne}>
                        <Animated.View
                        style={{
                            marginLeft: movingMargin,
                            marginTop: 30,
                            height: 30,
                            width: 40,
                            marginBottom: 10,
                            backgroundColor: 'red'}} />
                    
                        <Image
                            source={{ uri: 'https://www.jeopardy.com/sites/default/files/styles/cast_bio/public/2018-06/jp_s33_cast_alex_0.jpg?itok=HGa-Kx3K' }}
                            style={{ height: deviceHeight/6.5, width: deviceHeight/9.4 }}
                        />
                               
                        <Text style={styles.header}>
                            Jeopardy
                        </Text>
                        <View style={styles.buttonText}>
                            <Text style={styles.defaultTextRed}>
                                Version 2.0
                            </Text>
                            <View style={styles.flexRow}>
                                <TextInput
                                    value={this.state.playerOne}
                                    onChangeText={this._playerOne}
                                    style={styles.textInputplayerOne}
                                />

                            </View>
                            <View style={styles.flexRow}>
                                <TextInput
                                    value={this.state.playerTwo}
                                    onChangeText={this._playerTwo}
                                    style={styles.textInputplayerTwo}
                                />
                                  
                            </View>
                            <Animated.View
                        style={{
                            marginLeft: movingMargin,
                            marginTop: 0,
                            height: 30,
                            width: 40,
                            marginBottom: 30,
                            backgroundColor: 'blue'}} />
                        </View>
                        
                    </View>
                </View>
                
                {/*This is the game page display*/}
                <View style={{ display: this.state.gamePageDisplay }}>
                    <View style={styles.mainComponentTwo}>
                        <View style={styles.turnLabel}>
                            <Text style={styles.defaultTextBlack}>
                                {this.state.playerOne + ' vs ' + this.state.playerTwo}
                            </Text>
                            <Text style={styles.defaultText}>
                                Answer questions right, gain points. Answer questions wrong, lose points. Whomever has the most points, WINS!!!
                            </Text>
                        </View>
                        <View style={styles.layout}>
                            
                            <View style={styles.flexRow}>
                            <View>
                                <TouchableHighlight
                                onPress={this.handleCategoryOnePress}
                                disabled={this.state.sportsButtonDisabled}
                            >
                                <ImageBackground
                                    style={styles.background}
                                    source={{ uri: 'https://codehs.com/uploads/081207b36ed0f8f9b8627e2296a5409b' }}
                                >
                                
                                
                                    <View style={styles.buttonsSports}>
                                        <Text style={styles.buttonTextSports}>
                                            Sports
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight
                                onPress={this.handleCategoryTwoPress}
                                disabled={this.state.popCultureButtonDisabled}
                            >
                                <ImageBackground
                                    style={styles.background}
                                    source={{ uri: 'https://codehs.com/uploads/51e773ecbdb1df9c25d87a00a68ab08a' }}
                                >
                                
                                
                                    <View style={styles.buttonsPopCulture}>
                                        <Text style={styles.buttonTextPopCulture}>
                                            Pop Culture
                                        </Text>
                                    </View>    
                                </ImageBackground>
                            </TouchableHighlight>
                            </View>
                            </View>
                            
                            <View style={styles.flexRow}>
                            <View>
                                <TouchableHighlight
                                onPress={this.handleCategoryThreePress}
                                disabled={this.state.geogButtonDisabled}
                            >
                                <ImageBackground
                                    style={styles.background}
                                    source={{ uri: 'https://codehs.com/uploads/ced6dcd3f0b6c0960840c1ea4db59144' }}
                                >
                                    <View style={styles.buttonsGeography}>
                                        <Text style={styles.buttonTextGeography}>
                                            Geography
                                        </Text>
                                    </View>   
                                </ImageBackground>
                                 
                            </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight
                                onPress={this.handleCategoryFourPress}
                                disabled={this.state.foodButtonDisabled}
                            >
                                <ImageBackground
                                    style={styles.background}
                                    source={{ uri: 'https://codehs.com/uploads/0c8d308403f52e4379150a524f3bcbdb' }}
                                >
                                
                                
                                    <View style={styles.buttonsFood}>
                                        <Text style={styles.buttonTextFood}>
                                            Food
                                        </Text>
                                    </View>    
                                </ImageBackground>
                            </TouchableHighlight>
                            </View>
                            </View>
                            
                        </View>
                    </View>
                </View>
                
                {/*This is where the points are displayed*/}
                <View style={{ display: this.state.standingsPageDisplay }}>
                    <View style={styles.mainComponentStandings}>    
                        <Text style={styles.header}>
                            Standings
                        </Text>
                        <View style={styles.flexRow}>
                            <Text style={styles.defaultTextRed}>
                                {this.state.playerOne}
                            </Text>
                            <Text style={styles.defaultTextBlue}>
                                -
                            </Text>
                            <Text style={styles.defaultTextRed}>
                                {this.state.playerOnePoints}
                            </Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text style={styles.defaultTextBlue}>
                                {this.state.playerTwo}
                            </Text>
                            <Text style={styles.defaultTextRed}>
                                -
                            </Text>
                            <Text style={styles.defaultTextBlue}>
                                {this.state.playerTwoPoints}
                            </Text>
                        </View>
                        <Text style={styles.defaultText}>
                            After you finish all four categories click the button down below to determine the winner of the game.
                        </Text>
                        
                        <TouchableHighlight
                            onPress={this.handleWinnerOrLoserText}
                        >
                        
                            <View style={styles.navButton}>
                                <Text style={styles.navButtonText}>
                                    Winner?
                                </Text>
                            
                            </View>
                        </TouchableHighlight>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.endText}
                        </Text>
                        
                    </View>
                </View>
                {/*This is where the category one: sports questions are displayed*/}
                <View style={{display: this.state.categoryOneQuestions}}>
                    
                        <View style={styles.mainComponentSports}>
                            <View style={styles.pointsCont}>
                                <Text style={styles.defaultTextRedMini}>
                                    {this.state.playerOne + ' : ' + this.state.playerOnePoints + '  Prev Ans: ' + this.state.playerOneCorrect}
                                </Text>
                                <Text style={styles.defaultTextBlueMini}>
                                    {this.state.playerTwo + ' : ' + this.state.playerTwoPoints + '  Prev Ans: ' + this.state.playerTwoCorrect}
                                </Text>
                            </View>
                        
                        <Text style={styles.defaultTextBlack}>
                        {this.state.sportsQuestions[this.state.sportsIndex].question}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.sportsQuestions[this.state.sportsIndex].choices[0]}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.sportsQuestions[this.state.sportsIndex].choices[1]}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.sportsQuestions[this.state.sportsIndex].choices[2]}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.sportsQuestions[this.state.sportsIndex].choices[3]}
                        </Text>
                        
                        <View style={styles.flexRow}>
                                <TextInput
                                    value={this.state.playerOneAnswer}
                                    style={styles.textInputplayerOne}
                                    onChangeText= {this._playerOneAnswer}
                                />

                        </View>
                        <View style={styles.flexRow}>
                                <TextInput
                                    value={this.state.playerTwoAnswer}
                                    style={styles.textInputplayerTwo}
                                    onChangeText= {this._playerTwoAnswer}
                                />
                        </View>
                         
                        <TouchableHighlight
                            
                            onPress={this.handleSportsAnswer}
                        >
                        
                            <View style={styles.navButton}>
                                
                                <Text style={styles.navButtonText}>
                                    Submit
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                
                {/*This is the category 2 questions being displayed*/}
                <View style={{display: this.state.categoryTwoQuestions}}>
                    
                    <View style={styles.mainComponentPopCult}>
                        <View style={styles.pointsCont}>
                                <Text style={styles.defaultTextRedMini}>
                                    {this.state.playerOne + ' : ' + this.state.playerOnePoints + '  Prev Ans: ' + this.state.playerOneCorrect}
                                </Text>
                                <Text style={styles.defaultTextBlueMini}>
                                    {this.state.playerTwo + ' : ' + this.state.playerTwoPoints + '  Prev Ans: ' + this.state.playerTwoCorrect}
                                </Text>
                            </View>
                        <Text style={styles.defaultTextBlack}>
                        {this.state.popCultureQuestions[this.state.popCultureIndex].question}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.popCultureQuestions[this.state.popCultureIndex].choices[0]}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.popCultureQuestions[this.state.popCultureIndex].choices[1]}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.popCultureQuestions[this.state.popCultureIndex].choices[2]}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.popCultureQuestions[this.state.popCultureIndex].choices[3]}
                        </Text>
                        
                        <View style={styles.flexRow}>
                                <TextInput
                                    value={this.state.playerOneAnswer}
                                    style={styles.textInputplayerOne}
                                    onChangeText= {this._playerOneAnswer}
                                />

                        </View>
                        <View style={styles.flexRow}>
                                <TextInput
                                    value={this.state.playerTwoAnswer}
                                    style={styles.textInputplayerTwo}
                                    onChangeText= {this._playerTwoAnswer}
                                />
                        </View>
                         
                        <TouchableHighlight
                            onPress={this.handlePopCultAnswer}
                        >
                        
                            <View style={styles.navButton}>
                                
                                <Text style={styles.navButtonText}>
                                    Submit
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                {/*This is the category three questions being displayed*/}
                <View style={{display: this.state.categoryThreeQuestions}}>
                    
                    <View style={styles.mainComponentGeo}>
                        <View style={styles.pointsCont}>
                                <Text style={styles.defaultTextRedMini}>
                                    {this.state.playerOne + ' : ' + this.state.playerOnePoints + '  Prev Ans: ' + this.state.playerOneCorrect}
                                </Text>
                                <Text style={styles.defaultTextBlueMini}>
                                    {this.state.playerTwo + ' : ' + this.state.playerTwoPoints + '  Prev Ans: ' + this.state.playerTwoCorrect}
                                </Text>
                            </View>
                        <Text style={styles.defaultTextBlack}>
                        {this.state.geographyQuestions[this.state.geographyIndex].question}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.geographyQuestions[this.state.geographyIndex].choices[0]}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.geographyQuestions[this.state.geographyIndex].choices[1]}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.geographyQuestions[this.state.geographyIndex].choices[2]}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.geographyQuestions[this.state.geographyIndex].choices[3]}
                        </Text>
                        
                        <View style={styles.flexRow}>
                                <TextInput
                                    value={this.state.playerOneAnswer}
                                    style={styles.textInputplayerOne}
                                    onChangeText= {this._playerOneAnswer}
                                />

                        </View>
                        <View style={styles.flexRow}>
                                <TextInput
                                    value={this.state.playerTwoAnswer}
                                    style={styles.textInputplayerTwo}
                                    onChangeText= {this._playerTwoAnswer}
                                />
                        </View>
                         
                        <TouchableHighlight
                            
                            onPress={this.handleGeographyAnswer}
                        >
                        
                            <View style={styles.navButton}>
                                
                                <Text style={styles.navButtonText}>
                                    Submit
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                {/*This is the category four questions being displayed*/}
                <View style={{display: this.state.categoryFourQuestions}}>
                    
                    <View style={styles.mainComponentFood}>
                        <View style={styles.pointsCont}>
                                <Text style={styles.defaultTextRedMini}>
                                    {this.state.playerOne + ' : ' + this.state.playerOnePoints + '  Prev Ans: ' + this.state.playerOneCorrect}
                                </Text>
                                <Text style={styles.defaultTextBlueMini}>
                                    {this.state.playerTwo + ' : ' + this.state.playerTwoPoints + '  Prev Ans: ' + this.state.playerTwoCorrect}
                                </Text>
                            </View>
                        <Text style={styles.defaultTextBlack}>
                        {this.state.foodQuestions[this.state.foodIndex].question}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.foodQuestions[this.state.foodIndex].choices[0]}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.foodQuestions[this.state.foodIndex].choices[1]}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.foodQuestions[this.state.foodIndex].choices[2]}
                        </Text>
                        <Text style={styles.defaultTextBlack}>
                            {this.state.foodQuestions[this.state.foodIndex].choices[3]}
                        </Text>
                        
                        <View style={styles.flexRow}>
                                <TextInput
                                    value={this.state.playerOneAnswer}
                                    style={styles.textInputplayerOne}
                                    onChangeText= {this._playerOneAnswer}
                                />

                        </View>
                        <View style={styles.flexRow}>
                                <TextInput
                                    value={this.state.playerTwoAnswer}
                                    style={styles.textInputplayerTwo}
                                    onChangeText= {this._playerTwoAnswer}
                                />
                        </View>
                         
                        <TouchableHighlight
                            
                            onPress={this.handleFoodAnswer}
                        >
                        
                            <View style={styles.navButton}>
                                
                                <Text style={styles.navButtonText}>
                                    Submit
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                
                {/*This is the navbar with all the buttons*/} 
                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleTeamPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Intro
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleGamePagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Game
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleStandingsPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Standings
                        </Text>
                    </TouchableHighlight>
                </View>
                
            </View>
        );
    }
}
    {/*https://stackoverflow.com/questions/46387355/text-shadow-in-react-native*/}
        {/*Text Shadow Styling*/}
const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: deviceHeight/14,
        color: 'seashell',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
        textShadowColor: 'blue', 
    },
    headerStandings: {
        fontSize: deviceHeight/14,
        color: 'seashell',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
        textShadowColor: 'black',
    },
    flexRow: {
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerView: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputplayerOne:{
        width: deviceWidth/2,
        height: deviceWidth/8, 
        padding: deviceWidth/40,
        color: 'white',
        borderWidth: deviceWidth/180,
        borderColor: 'red',
        borderStyle: 'dotted',
        margin: deviceWidth/14,
    },
    textInputplayerTwo:{
        width: deviceWidth/2,
        height: deviceWidth/8, 
        padding: deviceWidth/40,
        color: 'white',
        borderWidth: deviceWidth/180,
        borderColor: 'blue',
        borderStyle: 'dotted',
        margin: deviceWidth/14,
    },
    pointsCont: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: deviceHeight/15,
        width: deviceWidth,
    },

    defaultTextRedMini: {
        fontSize: deviceWidth/20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
        textShadowColor: 'red',
        marginBottom: 10,
    },
    defaultTextBlueMini: {
        fontSize: deviceWidth/20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
        textShadowColor: 'blue', 
        marginBottom: 10,
    },
    defaultText: {
        fontSize: deviceWidth/20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    defaultTextRed: {
        fontSize: deviceWidth/15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
        textShadowColor: 'red', 
        margin: 20,
        
    },
    defaultTextBlack: {
        fontSize: deviceWidth/20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
        textShadowColor: 'black', 
        marginBottom: 10,
        
    },
    defaultTextBlue: {
        fontSize: deviceWidth/15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
        textShadowColor: 'blue', 
        margin: 20,
    },
    mainComponentOne: {
        height: deviceHeight/6*5,
        width: deviceWidth,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'steelblue',
    },
    mainComponentTwo: {
        height: deviceHeight/6*5,
        width: deviceWidth,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'steelblue',
    },
    mainComponentThree: {
        height: deviceHeight/6*5,
        width: deviceWidth,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'steelblue',
    },
    mainComponentStandings: {
        height: deviceHeight/6*5,
        width: deviceWidth,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',    
    },
    mainComponentSports: {
        height: deviceHeight/6*5,
        width: deviceWidth,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightBlue',
    },
    mainComponentPopCult: {
        height: deviceHeight/6*5,
        width: deviceWidth,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
    },
    mainComponentGeo: {
        height: deviceHeight/6*5,
        width: deviceWidth,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    mainComponentFood: {
        height: deviceHeight/6*5,
        width: deviceWidth,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#594a29',
    },
    navButton: {
        height: deviceHeight/14,
        width: deviceWidth/4,
        backgroundColor: 'white',
        borderColor: 'lightblue',
        borderWidth: deviceWidth/111,
        alignItems: 'center',
        justifyContent: 'center',
        margin: deviceWidth/22,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: 'darkblue',
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: 'darkblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    turnLabel: {
        height: deviceHeight/36*5,
        backGroundColor: 'white',
        flexDirection: 'column',
    },
    buttonsSports: {
        height: deviceHeight/36*12.5,
        width: deviceWidth/2,
        borderColor: 'lightblue',
        borderWidth: deviceWidth/111,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsPopCulture: {
        height: deviceHeight/36*12.5,
        width: deviceWidth/2,
        borderColor: 'black',
        borderWidth: deviceWidth/111,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsGeography: {
        height: deviceHeight/36*12.5,
        width: deviceWidth/2,
        borderColor: 'darkGreen',
        borderWidth: deviceWidth/111,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsFood: {
        height: deviceHeight/36*12.5,
        width: deviceWidth/2,
        borderColor: 'seashell',
        borderWidth: deviceWidth/111,
        alignItems: 'center',
        justifyContent: 'center',
    },
    layout: {
        height: deviceHeight/36*25,
    },
    buttonTextSports: {
        fontSize: deviceWidth/10,
        color: 'lightblue',
        textAlign: 'center',
        margin: deviceWidth/40,
        marginTop: deviceWidth/80,
        alignItems: 'center',
        justifyContent: 'cener'
    },
    buttonTextPopCulture: {
        fontSize: deviceWidth/10,
        color: 'white',
        textAlign: 'center',
        margin: deviceWidth/40,
        marginTop: deviceWidth/80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextGeography: {
        fontSize: deviceWidth/10,
        color: 'lawngreen',
        textAlign: 'center',
        margin: deviceWidth/40,
        marginTop: deviceWidth/80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextFood: {
        fontSize: deviceWidth/10,
        color: 'seashell',
        textAlign: 'center',
        margin: deviceWidth/40,
        marginTop: deviceWidth/80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    questionButtonSports: {
        width: deviceWidth,
        height: 5*(deviceHeight/24),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightBlue',
        borderWidth: deviceWidth/111,
        borderColor: 'black',
    },
    questionButtonPopCulture: {
        width: deviceWidth,
        height: 5*(deviceHeight/24),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: deviceWidth/111,
        borderColor: 'black',
    },
    questionButtonGeography: {
        width: deviceWidth,
        height: 5*(deviceHeight/24),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkGreen',
        borderWidth: deviceWidth/111,
        borderColor: 'black',
    },
    questionButtonFood: {
        width: deviceWidth,
        height: 5*(deviceHeight/24),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'seashell',
        borderWidth: deviceWidth/111,
        borderColor: 'black',
    },
    sportsQuestionsText: {
        color: 'black',
        fontSize: deviceWidth/10, 
    },
    
});