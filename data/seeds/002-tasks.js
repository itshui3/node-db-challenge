exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      id: 1, 
      description: 'learn to code', 
      notes: 'finish lambda, write a list of what I need to fill in and work at it', 
      completed: false, 
      project_id: 1
    },
    {
      id: 2, 
      description: 'build projects and portfolio', 
      notes: 'keep track of ideation, and think about what sort of features would be cool and useful', 
      completed: false, 
      project_id: 1
    },
    {
      id: 3, 
      description: 'put projects on portfolio', 
      notes: 'have a timeline and piece it all together', 
      completed: false, 
      project_id: 1
    },
    {
      id: 4, 
      description: 'figure out a comfy job search procedure', 
      notes: 'keep notes about blockers and work with career people to figure it out', 
      completed: false, 
      project_id: 1
    },
    {
      id: 5, 
      description: 'look for work', 
      notes: 'just do it', 
      completed: false, 
      project_id: 1
    },
    {
      id: 6, 
      description: 'feed cat', 
      notes: 'can\'t just get a cat, gotta keep her fed too', 
      completed: false, 
      project_id: 2
    }
  ]);
};
