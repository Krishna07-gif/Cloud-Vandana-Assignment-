import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class shuffle {
    public static void main(String[] args) {
        // Create an array of values
        Integer[] values = {1, 2, 3, 4, 5, 6, 7};

        // Convert the array to an ArrayList
        List<Integer> list = new ArrayList<>(Arrays.asList(values));

        // Shuffle the list using Collections.shuffle
        Collections.shuffle(list);

        // Convert the shuffled list back to an array
        
        Integer[] shuffledArray = list.toArray(new Integer[0]);

        // Print the shuffled array
        for (int i = 0; i < shuffledArray.length; i++) {
            System.out.print(shuffledArray[i] + " ");
        }
    }
}
