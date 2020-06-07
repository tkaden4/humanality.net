import _ from "lodash";

export const categories = ["Extroversion", "Agreeableness", "Conscientiousness", "Emotional Stability", "Openness"];

export const questions = [
  { question: "Am interested in people.", category: "Agreeableness", score: "1" },
  { question: "Sympathize with others' feelings.", category: "Agreeableness", score: "1" },
  { question: "Have a soft heart.", category: "Agreeableness", score: "1" },
  { question: "Take time out for others.", category: "Agreeableness", score: "1" },
  { question: "Feel others' emotions.", category: "Agreeableness", score: "1" },
  { question: "Make people feel at ease.", category: "Agreeableness", score: "1" },
  { question: "Inquire about others' well-being.", category: "Agreeableness", score: "1" },
  { question: "Know how to comfort others.", category: "Agreeableness", score: "1" },
  { question: "Love children.", category: "Agreeableness", score: "1" },
  { question: "Am on good terms with nearly everyone.", category: "Agreeableness", score: "1" },
  { question: "Have a good word for everyone.", category: "Agreeableness", score: "1" },
  { question: "Show my gratitude.", category: "Agreeableness", score: "1" },
  { question: "Think of others first.", category: "Agreeableness", score: "1" },
  { question: "Love to help others.", category: "Agreeableness", score: "1" },
  { question: "Am not interested in other people's problems.", category: "Agreeableness", score: "-1" },
  { question: "Feel little concern for others.", category: "Agreeableness", score: "-1" },
  { question: "Am not really interested in others.", category: "Agreeableness", score: "-1" },
  { question: "Am hard to get to know.", category: "Agreeableness", score: "-1" },
  { question: "Am indifferent to the feelings of others.", category: "Agreeableness", score: "-1" },
  { question: "Am always prepared.", category: "Conscientiousness", score: "1" },
  { question: "Pay attention to details.", category: "Conscientiousness", score: "1" },
  { question: "Get chores done right away.", category: "Conscientiousness", score: "1" },
  { question: "Like order.", category: "Conscientiousness", score: "1" },
  { question: "Follow a schedule.", category: "Conscientiousness", score: "1" },
  { question: "Am exacting in my work.", category: "Conscientiousness", score: "1" },
  { question: "Do things according to a plan.", category: "Conscientiousness", score: "1" },
  { question: "Continue until everything is perfect.", category: "Conscientiousness", score: "1" },
  { question: "Make plans and stick to them.", category: "Conscientiousness", score: "1" },
  { question: "Love order and regularity.", category: "Conscientiousness", score: "1" },
  { question: "Like to tidy up.", category: "Conscientiousness", score: "1" },
  { question: "Leave my belongings around.", category: "Conscientiousness", score: "-1" },
  { question: "Make a mess of things.", category: "Conscientiousness", score: "-1" },
  { question: "Often forget to put things back in their proper place.", category: "Conscientiousness", score: "-1" },
  { question: "Shirk my duties.", category: "Conscientiousness", score: "-1" },
  { question: "Neglect my duties.", category: "Conscientiousness", score: "-1" },
  { question: "Waste my time.", category: "Conscientiousness", score: "-1" },
  { question: "Do things in a half-way manner.", category: "Conscientiousness", score: "-1" },
  { question: "Find it difficult to get down to work.", category: "Conscientiousness", score: "-1" },
  { question: "Leave a mess in my room.", category: "Conscientiousness", score: "-1" },
  { question: "Am relaxed most of the time.", category: "Emotional Stability", score: "1" },
  { question: "Seldom feel blue.", category: "Emotional Stability", score: "1" },
  { question: "Am not easily bothered by things.", category: "Emotional Stability", score: "1" },
  { question: "Rarely get irritated.", category: "Emotional Stability", score: "1" },
  { question: "Seldom get mad.", category: "Emotional Stability", score: "1" },
  { question: "Get stressed out easily.", category: "Emotional Stability", score: "-1" },
  { question: "Worry about things.", category: "Emotional Stability", score: "-1" },
  { question: "Am easily disturbed.", category: "Emotional Stability", score: "-1" },
  { question: "Get upset easily.", category: "Emotional Stability", score: "-1" },
  { question: "Change my mood a lot.", category: "Emotional Stability", score: "-1" },
  { question: "Have frequent mood swings.", category: "Emotional Stability", score: "-1" },
  { question: "Get irritated easily.", category: "Emotional Stability", score: "-1" },
  { question: "Often feel blue.", category: "Emotional Stability", score: "-1" },
  { question: "Get angry easily.", category: "Emotional Stability", score: "-1" },
  { question: "Panic easily.", category: "Emotional Stability", score: "-1" },
  { question: "Feel threatened easily.", category: "Emotional Stability", score: "-1" },
  { question: "Get overwhelmed by emotions.", category: "Emotional Stability", score: "-1" },
  { question: "Take offense easily.", category: "Emotional Stability", score: "-1" },
  { question: "Get caught up in my problems.", category: "Emotional Stability", score: "-1" },
  { question: "Grumble about things.", category: "Emotional Stability", score: "-1" },
  { question: "Am the life of the party.", category: "Extroversion", score: "1" },
  { question: "Feel comfortable around people.", category: "Extroversion", score: "1" },
  { question: "Start conversations.", category: "Extroversion", score: "1" },
  { question: "Talk to a lot of different people at parties.", category: "Extroversion", score: "1" },
  { question: "Don't mind being the center of attention.", category: "Extroversion", score: "1" },
  { question: "Make friends easily.", category: "Extroversion", score: "1" },
  { question: "Take charge.", category: "Extroversion", score: "1" },
  { question: "Know how to captivate people.", category: "Extroversion", score: "1" },
  { question: "Feel at ease with people.", category: "Extroversion", score: "1" },
  { question: "Am skilled in handling social situations.", category: "Extroversion", score: "1" },
  { question: "Don't talk a lot.", category: "Extroversion", score: "-1" },
  { question: "Keep in the background.", category: "Extroversion", score: "-1" },
  { question: "Have little to say.", category: "Extroversion", score: "-1" },
  { question: "Don't like to draw attention to myself.", category: "Extroversion", score: "-1" },
  { question: "Am quiet around strangers.", category: "Extroversion", score: "-1" },
  { question: "Find it difficult to approach others.", category: "Extroversion", score: "-1" },
  { question: "Often feel uncomfortable around others.", category: "Extroversion", score: "-1" },
  { question: "Bottle up my feelings.", category: "Extroversion", score: "-1" },
  { question: "Am a very private person.", category: "Extroversion", score: "-1" },
  { question: "Wait for others to lead the way.", category: "Extroversion", score: "-1" },
  { question: "Have a rich vocabulary.", category: "Openness", score: "1" },
  { question: "Have a vivid imagination.", category: "Openness", score: "1" },
  { question: "Have excellent ideas.", category: "Openness", score: "1" },
  { question: "Am quick to understand things.", category: "Openness", score: "1" },
  { question: "Use difficult words.", category: "Openness", score: "1" },
  { question: "Spend time reflecting on things.", category: "Openness", score: "1" },
  { question: "Am full of ideas.", category: "Openness", score: "1" },
  { question: "Carry the conversation to a higher level.", category: "Openness", score: "1" },
  { question: "Catch on to things quickly.", category: "Openness", score: "1" },
  { question: "Can handle a lot of information.", category: "Openness", score: "1" },
  { question: "Love to think up new ways of doing things.", category: "Openness", score: "1" },
  { question: "Love to read challenging material.", category: "Openness", score: "1" },
  { question: "Am good at many things.", category: "Openness", score: "1" },
  { question: "Have difficulty understanding abstract ideas.", category: "Openness", score: "-1" },
  { question: "Am not interested in abstract ideas.", category: "Openness", score: "-1" },
  { question: "Do not have a good imagination.", category: "Openness", score: "-1" },
  { question: "Try to avoid complex people.", category: "Openness", score: "-1" },
  { question: "Have difficulty imagining things.", category: "Openness", score: "-1" },
  { question: "Avoid difficult reading material.", category: "Openness", score: "-1" },
  { question: "Will not probe deeply into a subject.", category: "Openness", score: "-1" },
];

export const keywords = {
  Extroversion: ["Socially engaged", "Enthusiastic", "Assertive", "Full of energy", "Breadthful"],
  Agreeableness: [
    "Considerate",
    "Trustworthy",
    "Trusting",
    "Concerned with the well-being of others",
    "Seeks group harmony",
  ],
  Conscientiousness: ["Disciplined", "Dutiful", "Reliable", "Less spontaneous", "Focused", "Stubborn"],
  Openness: ["Unpredictable", "Pursues experiences", "Open-minded", "Curious", "Spontaneous"],
  "Emotional Stability": ["Calm", "Less easily upset", "Less pessimistic"],
};

export function personalize(question) {
  return `I ${question.toLowerCase()}`;
}

export function categoryTotal(category) {
  return questions.filter((x) => x.category === category).reduce((acc, _) => acc + 5, 0);
}

export function score(results) {
  const totals = _.fromPairs(categories.map((category) => [category, categoryTotal(category)]));
  return _.fromPairs(
    _.keys(results).map((category) => [category, Math.round((100 * results[category]) / totals[category])])
  );
}

export default {
  categories,
  questions,
  keywords,
  personalize,
  score,
  categoryTotal,
};
