//resData is the prop which received from the parent component RestaurantContainer
//You might think you’re passing something like this
/\*
name: "Domino's Pizza",
cuisines: ["Pizza", "Italian"],
deliveryTime: 30,
cloudinaryImageId: "abcd123",
avgRating: 4.3

But actually, you’re not.
You’re passing this 👇

{
data: {
name: "Domino's Pizza",
cuisines: ["Pizza", "Italian"],
deliveryTime: 30,
cloudinaryImageId: "abcd123",
avgRating: 4.3
}
}
thats why you cant directly destrture on fly
\*/

{/_Here we are passing the props to the component, And component is going
to be receive that as props(object) _/}
{/_ <ResCards resData={resList[0]} /> _/}
{/\*
🧠 Summary:

      - resList is an array containing details of multiple restaurants.
      - Using .map(), we loop through each restaurant object in the array.
      - In each iteration, 'res' represents one restaurant object.
      - For every 'res', we render a <ResCards /> component.
      - We pass that restaurant object as a prop named 'resData' to the child component.
      - This makes the code dynamic — it can render any number of restaurants automatically.

      Example:
      resList = [res1, res2, res3]
      → <ResCards resData={res1} />
      → <ResCards resData={res2} />
      → <ResCards resData={res3} />
      */}

       /*  The 'key' prop gives each list item a unique identity.
            - React uses keys to efficiently update, add, or remove elements in a list.
            - Without keys, React can get confused and re-render the wrong components.
            - Always use a stable, unique key (like an ID) instead of index or random numbers.*/
