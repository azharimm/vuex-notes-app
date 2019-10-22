<template>
    <div class="sidebar">
        <div v-if="notes.length">
            <note v-for="note in notes" :key="note.title" :note="note"></note>
        </div>
        <div class="sidebar__content" v-else>
            No notes. Create note !
        </div>
        <div class="sidebar__content">
            <a href="#" @click.prevent="newNote">
                Start a new Note
            </a>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Note from './Note'
export default {
    components:{
        Note
    },
    computed:{
        ...mapGetters({
            notes:'notes'
        })
    },
    methods:{
        ...mapActions({
            newNote: 'newNote'
        })
    }
}
</script>

<style lang="scss" scoped>
    .sidebar{
        background-color: #f9f9f9;
        flex:1;
        height: 100%;
        min-width: 28%;
        border-right: 2px solid #eee;
        overflow-y: auto;

        &__content{
            padding: 30px;
            a{
                text-decoration: none;
                color: inherit;
            }
        }
    }
</style>