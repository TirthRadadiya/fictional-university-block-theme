<div class="full-width-split group">
    <div class="full-width-split__one">
        <div class="full-width-split__inner">
            <h2 class="headline headline--small-plus t-center">Upcoming Events</h2>

            <?php
            $homePageEvents = new WP_Query(
                array(
                    'posts_per_page' => 2, // give all post id set to -1
                    'post_type' => 'event',
                    'orderby' => 'meta_value_num', // 'title' -> alphabatically order by title, 'rand' -> getting random order, meta_value will enable sorting by custom fiels, meta_value is suitable for string values, we can use meta_value_num for numbers
                    'meta_key' => 'event_date', // after setting meta_value need to tell word press by which custom value we want sorting 
                    'order' => "ASC", // 'ASC' -> Ascending, 'DESC' -> Descending by default
                    'meta_query' => array(
                        array(
                            'key' => 'event_date',
                            'compare' => '>=',
                            'value' => date('Ymd'),
                            'type' => 'numeric'
                        )
                    )
                )
            );

            while ($homePageEvents->have_posts()) {
                $homePageEvents->the_post();
                get_template_part("template-parts/content", "event");
            } ?>


            <p class="t-center no-margin"><a href="<?php echo get_post_type_archive_link("event") ?>"
                    class="btn btn--blue">View All
                    Events</a></p>
        </div>
    </div>
    <div class="full-width-split__two">
        <div class="full-width-split__inner">
            <h2 class="headline headline--small-plus t-center">From Our Blogs</h2>

            <?php
            $homePagePosts = new WP_Query(
                array(
                    'posts_per_page' => 2
                )
            );

            while ($homePagePosts->have_posts()) {
                $homePagePosts->the_post(); ?>
                <div class="event-summary">
                    <a class="event-summary__date event-summary__date--beige t-center" href="#">
                        <span class="event-summary__month"><?php the_time("M") ?></span>
                        <span class="event-summary__day"><?php the_time("d") ?></span>
                    </a>
                    <div class="event-summary__content">
                        <h5 class="event-summary__title headline headline--tiny"><a
                                href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h5>
                        <p><?php if (has_excerpt())
                            echo get_the_excerpt();
                        else
                            echo wp_trim_words(get_the_content(), 18) ?>
                                <a href="<?php the_permalink(); ?>" class="nu gray">Read more</a>
                        </p>
                    </div>
                </div>

            <?php }
            wp_reset_postdata();
            ?>



            <p class="t-center no-margin"><a href="<?php echo site_url('/blog') ?>" class="btn btn--yellow">View All
                    Blog Posts</a></p>
        </div>
    </div>
</div>